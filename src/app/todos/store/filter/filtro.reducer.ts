import { createReducer, on, Action} from '@ngrx/store';
import * as filterActions from './filtro.actions';

export enum filtrosValidos {
  TODOS='todos',
  COMPLETADOS='completados',
  PENDIENTES='pendientes',
};

export const initialState = filtrosValidos.TODOS

const _filtroReducer = createReducer(
  initialState,
  on(filterActions.setFilter, (sate, { filtro }) => filtro ),

);

export function filtroReducer(state: filtrosValidos | undefined, action: Action) {
  return _filtroReducer(state, action);
}
