import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin(state.url);
  }
  
  checkLogin(url: string): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(map(resp => {
      if (resp) {
        console.log('inside the auth guard check login method, TRUE');
        return true;
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
