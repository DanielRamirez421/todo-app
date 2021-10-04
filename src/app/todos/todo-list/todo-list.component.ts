import { AppState } from './../../app.reducer';
import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(({ todos }) => {
      this.todos = todos;
    });

  }

}
