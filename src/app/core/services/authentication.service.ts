import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/Login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  //To allow the rest of the page to read if user logged in
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  //To get user data
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  //For reading tokens
  private jwtHelper = new JwtHelperService();

  //Log in
  login(userLogin: Login): Observable<boolean> {
    // POST the email/password to API account/login
    return this.http.post(`${environment.apiBaseUrl}account/login`, userLogin)
      .pipe(
        map((response: any) => {
          if (response) {
            // email/pw is correct
            // store the token in local storage and return true
            localStorage.setItem('token', response.token);
            this.populateUserInfo();
            return true;
          }
          return false;
        })
      )
  }

  //Log out
  logout() {
    //delete token
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next({} as User);
  }

  //Get local token and verify if user is/still is logged in
  populateUserInfo() {
    // get the token from local storage
    // decode the token to the typescript object 
    // push the auth true/false to the subject
    // push the user info also to another subjects

    var token = localStorage.getItem('token');

    //If token exist and not expire get user info
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // decode the token
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    }

  }
}
