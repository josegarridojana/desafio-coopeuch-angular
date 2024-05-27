import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-details',
  templateUrl: './tarea-details.component.html',
  styleUrls: ['./tarea-details.component.css'],
})
export class TareaDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTarea: Tarea = {
    name: '',
    descripcion: '',
    active: false,
	created: new Date(),
	modified: new Date(),
	lastLogin: new Date()
  };

  message = '';

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTarea(this.route.snapshot.params['id']);
    }
  }

  getTarea(id: string): void {
    this.tareaService.get(id).subscribe({
      next: (data) => {
        this.currentTarea = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentTarea.name,
      descripcion: this.currentTarea.descripcion,
      active: status
    };

    this.message = '';

    this.tareaService.update(this.currentTarea.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTarea.active = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTarea(): void {
    this.message = '';

    this.tareaService
      .update(this.currentTarea.id, this.currentTarea)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTarea(): void {
    this.tareaService.delete(this.currentTarea.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      error: (e) => console.error(e)
    });
  }
}
