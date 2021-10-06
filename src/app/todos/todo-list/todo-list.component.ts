import { AppState } from './../../app.reducer';
import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos } from '../store/filter/filtro.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { 
    this.filtroActual = filtrosValidos.TODOS;
  }

  ngOnInit(): void {
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }

}
