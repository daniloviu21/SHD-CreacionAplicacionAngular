import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

const routes: Routes = [
  {
    path: '', //Ruta base del módulo games
    component: NavbarComponent, //Componente que contiene la estructura del modelo
    children: [
      { path: 'home', component: GamePageComponent },
      /*{ path: 'solutions', component: SolutionsComponent }, // Asegúrate de definir este componente
      { path: 'pricing', component: PricingComponent }, // Asegúrate de definir este componente
      { path: 'resources', component: ResourcesComponent }, // Asegúrate de definir este componente
      { path: 'company', component: CompanyComponent }, // Asegúrate de definir este componente
      { path: 'sign-in', component: SignInComponent }, // Asegúrate de definir este componente
      { path: 'sign-up', component: SignUpComponent }, // Asegúrate de definir este componente
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
