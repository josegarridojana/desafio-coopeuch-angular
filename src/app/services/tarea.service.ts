import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea.model';

//const baseUrl = 'http://localhost:8088/desafio-coopeuch/tareas';
const baseUrl = 'desafio-coopeuch/tareas';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }
  

  get(id: any): Observable<Tarea> {
    return this.http.get<Tarea>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(title: any): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${baseUrl}?title=${title}`);
  }
}
