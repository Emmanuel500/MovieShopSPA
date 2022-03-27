import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieDetails } from 'src/app/shared/models/moviedetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  movieId: number = 0;
  movieDetails!: MovieDetails;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      p => {
        this.movieId = Number(p.get('movieId'));
        this.movieService.getDetailMovie(this.movieId).subscribe(
          m => {
            this.movieDetails = m;
          }
        );
      }
    );
  }

}
