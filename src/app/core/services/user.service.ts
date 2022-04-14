import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MovieCard } from '../../shared/models/moviecard';
import { Review } from 'src/app/shared/models/moviedetails';
import { User } from 'src/app/shared/models/User';
import { PurchaseDetails } from 'src/app/shared/models/PurchaseDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Get User Details
  userDetails(userId:number) {
    return this.http.get<User>(`${environment.apiBaseUrl}user/details`, {params: new HttpParams().set('userId', userId)})
  }

  //Post movie purchase
  userPurchaseMovie(userId:number, movieId:number, totalPrice:number) {
    let paramaters = new HttpParams();
    paramaters.append('userId', userId);
    paramaters.append('movieId', movieId);
    paramaters.append('totalPrice', totalPrice);
    return this.http.get<number>(`${environment.apiBaseUrl}user/purchase-movie`, {params: paramaters})
  }

  //Post movie favorite
  userFavoriteMovie(userId:number, movieId:number) {
    let paramaters = new HttpParams();
    paramaters.append('userId', userId);
    paramaters.append('movieId', movieId);
    return this.http.get<number>(`${environment.apiBaseUrl}user/favorite`, {params: paramaters})
  }

  //Post movie un-favorite
  userUnFavoriteMovie(userId:number, movieId:number) {
    let paramaters = new HttpParams();
    paramaters.append('userId', userId);
    paramaters.append('movieId', movieId);
    return this.http.get<string>(`${environment.apiBaseUrl}user/un-favorite`, {params: paramaters})
  }

  //Get check if Movie Favorited by user
  isMovieFavorited(userId:number, movieId:number) {
    return this.http.get<boolean>(`${environment.apiBaseUrl}user/check-movie-favorite/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Get User Review of Movie
  movieReview(userId:number, movieId:number) {
    return this.http.get<Review>(`${environment.apiBaseUrl}user/get-review-details/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Post add user review
  userAddReview(review:Review) {
    let paramaters = new HttpParams();
    paramaters.append('userId', review.userId);
    paramaters.append('movieId', review.movieId);
    paramaters.append('rating', review.rating);
    paramaters.append('reviewText', review.reviewText);
    return this.http.get<string>(`${environment.apiBaseUrl}user/add-review`, {params: paramaters})
  }

  //Put edit user review
  userEditReview(review:Review) {
    let paramaters = new HttpParams();
    paramaters.append('userId', review.userId);
    paramaters.append('movieId', review.movieId);
    paramaters.append('rating', review.rating);
    paramaters.append('reviewText', review.reviewText);
    return this.http.get<string>(`${environment.apiBaseUrl}user/edit-review`, {params: paramaters})
  }

  //Delete user review
  userDeleteReview(userId:number, movieId:number) {
    return this.http.get<string>(`${environment.apiBaseUrl}user/delete-review/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Get Movies Purchased
  getPurchasedMovies(userId:number): Observable<MovieCard[]> {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/purchases`, {params: new HttpParams().set('userId', userId)})
  }

  //Get Movie Purchase Details
  getPurchaseDetails(userId:number, movieId:number) {
    return this.http.get<PurchaseDetails>(`${environment.apiBaseUrl}user/purchase-details/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Get check if Movie purchased by user
  isMoviePurchased(userId:number, movieId:number) {
    return this.http.get<boolean>(`${environment.apiBaseUrl}user/check-movie-purchased/${movieId}`, {params: new HttpParams().set('userId', userId)})
  }

  //Get Favorited Movies
  getFavoritedMovies(userId:number) {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/favorites`, {params: new HttpParams().set('userId', userId)})
  }

  //Get users reviews
  getUserRevieweddMovies(userId:number) {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/movie-reviews`, {params: new HttpParams().set('userId', userId)})
  }
  
}
