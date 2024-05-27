import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit {

  tareas: Tarea[] = [];
  currentTarea: Tarea = {};
  currentIndex = -1;
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.retrieveTareas();
 }

  getRequestParams(searchName: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchName) {
      params[`name`] = searchName;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }
	console.log('params:'+ params);
    return params;
  }

  retrieveTareas(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);
    this.tareaService.getAll(params)
      .subscribe({
        next: (data) => {
          const { tareas, totalItems } = data;
          this.tareas = data;
		  this.count = totalItems;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
	  
	  
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTareas();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTareas();
  }

  refreshList(): void {
    this.retrieveTareas();
    this.currentTarea = {};
    this.currentIndex = -1;
  }

  setActiveTarea(tarea: Tarea, index: number): void {
    this.currentTarea = tarea;
    this.currentIndex = index;
  }

  removeAllTareas(): void {
    this.tareaService.deleteAll()
      .subscribe({
        next: res => {
          console.log(res);
          this.refreshList();
        },
        error: err => {
          console.log(err);
        }
      });

  }
  
  obtenerEstadosTransaccion(estado: string) {
    estado = estado.replace('Participa', 'Acumula');
    estado = estado.replace('Puede', 'Por');
    estado = estado.replace('Participar', 'Acumular');
    return estado;
  }

  searchName(): void {
    this.page = 1;
    this.retrieveTareas();
  }

}