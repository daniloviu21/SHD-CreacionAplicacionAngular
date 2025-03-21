import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardGamePageComponent } from './pages/card-game-page/card-game-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GamePageComponent,
    NavbarComponent,
    FooterComponent,
    CardGamePageComponent,
    AboutPageComponent
  ],
  imports: [
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    GamesRoutingModule,
    MaterialModule
  ]
})
export class GamesModule { }
