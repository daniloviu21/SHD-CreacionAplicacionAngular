import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    GamePageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule
  ]
})
export class GamesModule { }
