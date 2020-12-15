import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  tareas$ = new Observable<Tarea[]>();
  tareas: Tarea[] = [];
  constructor(private todoService: TodoService) {
    this.obtenerTareas();
   }

  ngOnInit(): void {
  }

  obtenerTareas() {
    this.tareas$ = this.todoService.obtenerTarea()
    this.tareas$.subscribe( tareas => this.tareas = tareas,
      err => alert('no se pudieron obtener las tareas')
      );
  }

}
