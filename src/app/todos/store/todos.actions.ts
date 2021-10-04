import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO] creación Todo', props<{texto: string}>());
export const toggle = createAction('[TODO] toggle Todo', props<{id: number}>());