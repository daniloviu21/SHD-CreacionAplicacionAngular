import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-card-game-page',
  standalone: false,
  templateUrl: './card-game-page.component.html',
  styleUrl: './card-game-page.component.css'
})
export class CardGamePageComponent implements OnInit {

  public juegos: Game[] = [];

  constructor(private juegosService: JuegosService){
  }

  ngOnInit(): void{
    this.juegosService.getJuegos().subscribe(juegos => {
      console.log('Juegos cargados:', juegos);
      this.juegos = juegos;
    });
  }
}
