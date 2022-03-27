import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { MovieCard } from 'src/app/shared/models/moviecard';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  movieCards!: MovieCard[];
  user!: User;

  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(resp => this.user = resp);
  }

  ngOnInit(): void {
    console.log('inside ngOn Init life cycle hook method')
    this.userService.getFavoritedMovies(this.user.nameid).subscribe(
      m => {
        this.movieCards = m;
        console.log(this.movieCards)
      }
    );
  }

}
