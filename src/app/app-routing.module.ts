import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },

  //load movie details page
  {
    path: "movies", loadChildren: () => import("./movies/movies.module").then(mod => mod.MoviesModule)
  },

  //load account
  {
    path: "account", loadChildren: () => import("./account/account.module").then(mod => mod.AccountModule)
  },

  //load user
  {
    path: "user", loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },

  // load the admin module(along with its components) lazily
  // http://localhost:4200/admin
  {
    path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
