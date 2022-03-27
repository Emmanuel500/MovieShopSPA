import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { MovieCard } from 'src/app/shared/models/moviecard';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  
  movieCards!: MovieCard[];
  user!: User;

  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(resp => this.user = resp);
  }

  ngOnInit(): void {
    this.userService.getPurchasedMovies(this.user.nameid).subscribe(
      m => {
        this.movieCards = m;
        console.log(this.movieCards)
      }
    );
  }

}
