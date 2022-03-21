import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MovieCard } from 'src/app/shared/models/moviecard';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  movieCards!: MovieCard[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('inside ngOn Init life cycle hook method')
    this.userService.getFavoritedMovies().subscribe(
      m => {
        this.movieCards = m;
        console.log(this.movieCards)
      }
    );
  }

}
