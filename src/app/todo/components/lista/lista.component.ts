import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, DoCheck {
  @Input() tareas: Tarea[] = [];
  tareasTerminadas = 0;
  constructor() { }

  

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.tareasTerminadas = this.tareas === null ? 0 :  this.tareas?.filter( t => t.hecho).length;
  }

  
  
  seleccionar(tarea: Tarea) {
    this.tareas.forEach( t => {
      if( t.id === tarea.id) {
        t.hecho = !t.hecho
      }
    });
    
    console.log(this.tareas);
  }
}
