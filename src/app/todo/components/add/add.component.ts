import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() update = new EventEmitter()
  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
  }

  agregarTarea(descripcion: string) {
    const tarea: Tarea = {
      id: this.todoservice.generarId(),
      descripcion,
      hecho: false
    }
    this.todoservice.agregarTarea(tarea);
    this.update.emit();
  }

}
