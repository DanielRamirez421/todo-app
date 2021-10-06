import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO] creación Todo', props<{texto: string}>());
export const toggle = createAction('[TODO] toggle Todo', props<{id: number}>());
export const eliminar = createAction('[TODO] eliminar Todo', props<{id: number}>());
export const editar = createAction('[TODO] editar Todo', props<{id: number, texto: string}>());
export const toogleAll = createAction('[TODO] toggle all Todos', props<{completado: boolean}>());
export const eliminarCompletados = createAction('[TODO] eliminar completados');