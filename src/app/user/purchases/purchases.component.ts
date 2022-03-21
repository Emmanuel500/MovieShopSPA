import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MovieCard } from 'src/app/shared/models/moviecard';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  
  movieCards!: MovieCard[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('inside ngOn Init life cycle hook method')
    this.userService.getPurchasedMovies().subscribe(
      m => {
        this.movieCards = m;
        console.log(this.movieCards)
      }
    );
  }

}
