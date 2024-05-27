import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { TareaDetailsComponent } from './components/tarea-details/tarea-details.component';
import { TareasListComponent } from './components/tareas-list/tareas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTareaComponent,
    TareaDetailsComponent,
    TareasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
