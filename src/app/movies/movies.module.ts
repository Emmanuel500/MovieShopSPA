import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGenresComponent } from './movie-genres/movie-genres.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieGenresComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
