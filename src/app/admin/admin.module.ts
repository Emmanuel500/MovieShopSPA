import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { TopPurchasedComponent } from './top-purchased/top-purchased.component';


@NgModule({
  declarations: [
    AdminComponent,
    CreateCastComponent,
    CreateMovieComponent,
    TopPurchasedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
