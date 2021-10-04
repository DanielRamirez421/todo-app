import { Action, createReducer, on } from '@ngrx/store';
import * as todoActions from './todos.actions';

import { Todo } from '../models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Primera tarea'),
  new Todo('Segunda tarea'),
  new Todo('Tercera tarea'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(todoActions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(todoActions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}