import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasListComponent } from './components/tareas-list/tareas-list.component';
import { TareaDetailsComponent } from './components/tarea-details/tarea-details.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasListComponent },
  { path: 'tareas/:id', component:TareaDetailsComponent },
  { path: 'add', component: AddTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
