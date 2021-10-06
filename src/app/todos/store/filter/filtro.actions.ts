import { createAction, props } from "@ngrx/store"
import { filtrosValidos } from "./filtro.reducer";


export const setFilter = createAction('[filtro] set filtro', props<{ filtro: filtrosValidos }>());