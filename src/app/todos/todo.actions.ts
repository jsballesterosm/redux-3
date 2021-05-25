import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] crear tarea',
    props<{texto: string}>()
);


export const toogle = createAction(
    '[TODO] Toogle todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] Editar todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] Eliminar todo',
    props<{id: number}>()
);

export const all = createAction(
    '[TODO] All todo',
    props<{completado: boolean}>()
);

export const limpiarCompletados = createAction('[Filtro] Limpiar Completados');