import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';

@Pipe({
  name: 'gameImage',
  standalone: false
})
export class GameImagePipe implements PipeTransform {

  transform(game: Game): string {
    if (!game.id && !game.alt_img) {
      return 'images/no-image.png';
      //Si el game no tiene un ID y tampoco una imagen, devuelve una imagen por defecto 
    }

    //return `images/games/${game.id}.jpg`;

    //if(hero.alt_img) return hero.alt_img;
    //si el game tine una imagen alternativa (alt_image) usa esa URL
    return game.alt_img || `images/heroes/${game.id}.jpg`;
    //Si el heroe tiene un ID, genera la URL de la imagen usando su ID
  }

}
