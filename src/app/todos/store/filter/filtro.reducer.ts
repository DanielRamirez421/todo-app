import { createReducer, on, Action} from '@ngrx/store';
import { filtrosValidos } from './filtro.actions';
import * as filterActions from './filtro.actions';


export const initialState: filtrosValidos = 'todos'

const _filtroReducer = createReducer(
  initialState,
  on(filterActions.setFilter, (sate, { filtro }) => filtro ),

);

export function filtroReducer(state: any | undefined, action: Action) {
  return _filtroReducer(state, action);
}
