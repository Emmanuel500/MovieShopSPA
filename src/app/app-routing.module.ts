import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { PurchasesComponent } from './user/purchases/purchases.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },

  //load movie details page
  {
    path: "movies/:movieId", component: MovieDetailsComponent
  },

  //load  user purchases page
  {
    path: "user/purchases", component: PurchasesComponent
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
