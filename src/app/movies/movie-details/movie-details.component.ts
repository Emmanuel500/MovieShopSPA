import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { UserService } from 'src/app/core/services/user.service';
import { MovieDetails, Review } from 'src/app/shared/models/moviedetails';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  movieId: number = 0;
  movieDetails!: MovieDetails;
  user!: User;
  isLoggedIn: boolean = false;
  userPurchased: boolean = false;
  userFavorited: boolean = false;
  userReview: Review = { userId: 0, movieId: 0, rating: 0, reviewText: "" };
  
  constructor(private movieService: MovieService, private userService: UserService, private authService: AuthenticationService, private activatedRoute: ActivatedRoute) {
    this.authService.isLoggedIn.subscribe(resp => this.isLoggedIn = resp);
    this.authService.currentUser.subscribe(resp => this.user = resp);
  }

  ngOnInit(): void {
    //
    this.activatedRoute.paramMap.subscribe(
      p => {
        this.movieId = Number(p.get('movieId'));
        this.movieService.getDetailMovie(this.movieId).subscribe(
          m => {
            this.movieDetails = m;
          }
        );

        //
        if (this.isLoggedIn) {
          //
          this.userService.isMoviePurchased(this.user.nameid, this.movieId).subscribe(
            pu => {
              this.userPurchased = pu;
            }
          );
          //
          this.userService.isMovieFavorited(this.user.nameid, this.movieId).subscribe(
            f => {
              this.userFavorited = f;
            }
          );
          this.userService.movieReview(this.user.nameid, this.movieId).subscribe(
            r => {
              if(r != null) {
                this.userReview = r;
              }
            }
          );
        }
      }
    );
  }
}
