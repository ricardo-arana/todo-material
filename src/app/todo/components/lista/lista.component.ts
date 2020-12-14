import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tareas: Tarea[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  seleciona(algo: any) {
    console.log(algo)
  }
}
