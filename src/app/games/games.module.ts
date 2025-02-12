import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    GamePageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule
  ]
})
export class GamesModule { }
