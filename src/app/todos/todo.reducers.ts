import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de ironman'),
  new Todo('Robar escudo capitan america'),
];
 
const _todoReducer = createReducer(
    estadoInicial,
    on(actions.crear, (state, {texto}) => [...state, new Todo( texto ) ]),
    on(actions.toogle, (state, {id}) => {
      return state.map( todo => {

        if ( todo.id === id ) {
          return {
            ...todo,
            completado: !todo.completado
          }
        } else {
          return todo;
        }
      });
    }),
    on(actions.editar, (state, {id, texto}) => {
      return state.map( todo => {

        if ( todo.id === id ) {
          return {
            ...todo,
            texto
          }
        } else {
          return todo;
        }
      });
    }),
    on(actions.all, (state, {completado}) => {
      return state.map(todo => {
          return {
            ...todo,
            completado
          }
      });
    }),
    on(actions.borrar, (state, {id}) => state.filter( todo => todo.id !== id) ),
    on(actions.limpiarCompletados, (state) => state.filter(todo => !todo.completado))
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}