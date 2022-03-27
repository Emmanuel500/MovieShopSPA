import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MovieCard } from '../../shared/models/moviecard';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Movies Purchased !need to pass user id!
  getPurchasedMovies(userId:number): Observable<MovieCard[]> {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/purchases`, {params: new HttpParams().set('userId', userId)})
  }

  //Favorited Movies !need to pass user id!
  getFavoritedMovies(userId:number) {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/favorites`, {params: new HttpParams().set('userId', userId)})
  }
}
