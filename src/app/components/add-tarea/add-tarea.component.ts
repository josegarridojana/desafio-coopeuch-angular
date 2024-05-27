import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css'],
})
export class AddTareaComponent {
  tarea: Tarea = {
    name: '',
    descripcion: '',
	active: false,	
	created: new Date(),
	modified: new Date(),
	lastLogin: new Date()
  };
  submitted = false;

  constructor(private tareaService: TareaService) {}

  saveTarea(): void {
    const data = {
      name: this.tarea.name,
      descripcion: this.tarea.descripcion
    };

    this.tareaService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTarea(): void {
    this.submitted = false;
    this.tarea = {
      name: '',
      descripcion: '',
      active: false,
	  created: new Date(),
	  modified: new Date(),
	  lastLogin: new Date()	
    };
  }
}
