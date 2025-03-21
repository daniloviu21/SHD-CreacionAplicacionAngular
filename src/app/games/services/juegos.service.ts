import { Injectable } from '@angular/core';
import { enviroments } from '../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private baseUrl: string = enviroments.baseUrl;

  constructor(private http: HttpClient) { }

  getJuegos(): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/juegos`);
  }

  addJuego(game: Game): Observable<Game>{
    return this.http.post<Game>(`${this.baseUrl}/juegos`, game);
  }

  updateGame(game: Game): Observable<Game>{
    if(!game.id) throw Error("Juego requerido");

    return this.http.patch<Game>(`${this.baseUrl}/juegos/${game.id}`, game);
  }

  deletedGameById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/juegos/${id}`).pipe(
      map(() => true),
      catchError(err => {
        console.error('Error eliminando el juego:', err);
        return of(false); // Si hay error, devuelve false
      })
    );
  }

  searchGame(query: string): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/juegos?q=${query}&_limit=6`);
  }
}