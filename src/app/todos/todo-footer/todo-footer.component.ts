import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from '../store/filter/filtro.reducer';
import * as filterActions from '../store/filter/filtro.actions';
import * as todoActions from '../store/main/todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: filtrosValidos | undefined;
  public filtros = [filtrosValidos.TODOS, filtrosValidos.PENDIENTES, filtrosValidos.COMPLETADOS];

  public pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    });
  }

  cambiarFiltro(filtro: filtrosValidos): void {
    this.store.dispatch(filterActions.setFilter({ filtro }));
  }

  limpiarCompletados(): void {
    this.store.dispatch(todoActions.eliminarCompletados());
  }

}
