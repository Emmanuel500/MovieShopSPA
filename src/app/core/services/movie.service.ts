import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/moviePagenation';
import { environment } from 'src/environments/environment';
import { MovieCard } from '../../shared/models/moviecard';
import { MovieDetails } from '../../shared/models/moviedetails';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }

  getTopGrossingMovies(): Observable<MovieCard[]> {

    // json array 
    // type script model
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}movies/top-grossing`)
    // call the API to get array of movies
    // GET
    // XMLHttpRequest
    // HttpClient -> XMLHttpRequest
    // Observables as better version of promises
    // RXJS

  }

  getDetailMovie(id:number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${environment.apiBaseUrl}movies/${id}`)
  }

  getAllMoviesPagenation(pageNumber:number): Observable<Pagination> {
    return this.http.get<Pagination>(`${environment.apiBaseUrl}movies`, {params: new HttpParams().set('pageNumber', pageNumber)})
  }

  getAllMoviesOfGenrePagenation(genreId:number, pageNumber:number): Observable<Pagination> {
    return this.http.get<Pagination>(`${environment.apiBaseUrl}movies/genre/${genreId}`, {params: new HttpParams().set('pageNumber', pageNumber)})
  }
}
