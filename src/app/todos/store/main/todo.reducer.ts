import { Action, createReducer, on } from '@ngrx/store';
import * as todoActions from './todos.actions';

import { Todo } from '../../models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Primera tarea'),
  new Todo('Segunda tarea'),
  new Todo('Tercera tarea'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(todoActions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(todoActions.eliminar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(todoActions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        }
      } else {
        return todo;
      }
    })
  }),
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
  on(todoActions.toogleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}