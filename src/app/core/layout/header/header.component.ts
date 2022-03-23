import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/shared/models/genre';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //For creating the genre list
  genreList!: Genre[];

  //To verify and check user info
  isLoggedIn: boolean = false;
  user!: User;

  constructor(private genreService: GenreService, private authService: AuthenticationService, private router: Router) {
    this.authService.isLoggedIn.subscribe(resp => this.isLoggedIn = resp);
    this.authService.currentUser.subscribe(resp => this.user = resp);
  }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(
      m => {
        this.genreList = m;
      }
    );
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigateByUrl('/account/login');
  }

}
