import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  constructor() { 
    console.log('servicio todo iniciado')
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    console.log(this.tareas);
  }

  obtenerTarea() {
    return this.tareas;
  }
 
  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

}
