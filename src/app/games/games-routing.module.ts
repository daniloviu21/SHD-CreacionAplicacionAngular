import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  {
    path: '', //Ruta base del módulo games
    component: LayoutPageComponent, //Componente que contiene la estructura del modelo
    children: [
      { path: ':id', component: GamePageComponent},
      { path: '**', redirectTo: 'list'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
