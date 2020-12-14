import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaComponent } from './components/lista/lista.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    ListaPageComponent
  ]
})
export class TodoModule { }
