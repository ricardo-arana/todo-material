import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  url = environment.apiUrl + environment.endpoints.tareas;
  constructor( private http: HttpClient) { 
    console.log('servicio todo iniciado')
  }

  agregarTarea(tarea: Tarea) {
    return this.http.post<Tarea>(this.url, tarea); 
  }

  obtenerTarea() {
    return this.http.get<Tarea[]>(this.url);
  }

  eliminarTarea(tareaId: number) {
    const url = `${this.url}/${tareaId}`;
    return this.http.delete(url);
  }
 
  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

}
