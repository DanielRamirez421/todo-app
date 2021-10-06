import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { filtrosValidos } from "./todos/store/filter/filtro.actions";
import { todoReducer } from "./todos/store/main/todo.reducer";
import { filtroReducer } from "./todos/store/filter/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}