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

  movieDetails!: MovieDetails;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the movie id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('movieId'));

    console.log('inside ngOn Init life cycle hook method')
    this.movieService.getDetailMovie(productIdFromRoute).subscribe(
      m => {
        this.movieDetails = m;
        console.log(this.movieDetails)
      }
    );
  }

}
