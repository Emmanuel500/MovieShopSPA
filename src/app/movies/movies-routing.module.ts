import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGenresComponent } from './movie-genres/movie-genres.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    children: [
      { path: ":movieId", component: MovieDetailsComponent },
      { path: 'genre/:genreId', component: MovieGenresComponent }
    ]
  }
  // http://localhost:4200/movies/{movieId}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
