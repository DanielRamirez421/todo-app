import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as todoActions from './../store/main/todos.actions';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store:Store<AppState> ) { 
    this.txtInput = new FormControl( '', Validators.required );
  }

  ngOnInit(): void {
  }

  agregar() {

    if (this.txtInput.invalid) { return; }

    this.store.dispatch(todoActions.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();

  }

}
