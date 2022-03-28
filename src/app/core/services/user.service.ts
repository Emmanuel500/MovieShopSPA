import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MovieCard } from '../../shared/models/moviecard';
import { Review } from 'src/app/shared/models/moviedetails';

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

  //Is Movie purchased by user
  isMoviePurchased(userId:number, movieId:number) {
    return this.http.get<boolean>(`${environment.apiBaseUrl}user/check-movie-purchased/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Is Movie Favorited
  isMovieFavorited(userId:number, movieId:number) {
    return this.http.get<boolean>(`${environment.apiBaseUrl}user/check-movie-favorite/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //User Review of Movie
  movieReview(userId:number, movieId:number) {
    return this.http.get<Review>(`${environment.apiBaseUrl}user/get-review-details/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }
}
