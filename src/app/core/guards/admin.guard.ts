import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.checkLogin();
    }

    user!: User;

    constructor(private authService: AuthenticationService, private router: Router, ) {
      this.authService.currentUser.subscribe(resp => this.user = resp);
    }

    checkLogin(): Observable<boolean> {
      return this.authService.isLoggedIn.pipe(map(resp => {
        if (resp) {
          // once authentication is true have another if condition and only return true if isAdmin is true
          console.log('inside the auth guard check login method, CHECK if user has admin role');
          if (this.user.isAdmin) {
            console.log('inside the auth guard check login method, user has admin role, TRUE');
            return true;
          }
          console.log('inside the auth guard check login method, user is not admin, FALSE');
          this.router.navigate([""]);
          return false;
        }
        else {
          this.router.navigate(["/account/login"]);
          console.log('inside the auth guard check login method, FALSE');
          return false;
        }
      }),
        catchError(() => {
          console.log('inside the auth guard check login method, catch error');
          this.router.navigate(["/account/login"]);
          return of(false);
        })
      )
    }
}
