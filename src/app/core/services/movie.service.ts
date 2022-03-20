import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieCard } from '../../shared/models/moviecard';

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
}
