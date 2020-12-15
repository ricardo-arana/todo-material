import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  constructor( private http: HttpClient) { 
    console.log('servicio todo iniciado')
  }

  agregarTarea(tarea: Tarea) {
    const url = environment.apiUrl + environment.endpoints.tareas;
    return this.http.post<Tarea>(url, tarea); 
  }

  obtenerTarea() {

    const url = environment.apiUrl + environment.endpoints.tareas;
    return this.http.get<Tarea[]>(url);
  }
 
  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

}
