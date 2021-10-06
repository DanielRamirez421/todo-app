import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from './../../app.reducer';
import * as todoActions from './../store/main/todos.actions';

import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('input') input: ElementRef | undefined;

  public checkCompletado: FormControl;
  public txtInput: FormControl;

  public editando = false;

  constructor(private store: Store<AppState>) {
    this.checkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );
   }

  ngOnInit(): void {
    this.checkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(todoActions.toggle({ id: this.todo.id }))
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue( this.todo.texto );
    setTimeout(() => this.input?.nativeElement.select(), 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }

    this.store.dispatch(todoActions.editar({ id: this.todo.id, texto: this.txtInput.value }));
  }

  eliminar() {
    this.store.dispatch(todoActions.eliminar({ id: this.todo.id}));
  }

}
