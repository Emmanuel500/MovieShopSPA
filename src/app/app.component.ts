import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Shop SPA';
  company = "Antra";

  //construct authentication to check for user token for expiration and if logged in when opening web again
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.populateUserInfo();
  }
}
