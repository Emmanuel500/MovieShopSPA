import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MovieCard } from '../../shared/models/moviecard';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Movies Purchased
  getPurchasedMovies(): Observable<MovieCard[]> {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/purchases`)
  }

  //Favorited Movies
  getFavoritedMovies() {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/favorites`)
  }
}
