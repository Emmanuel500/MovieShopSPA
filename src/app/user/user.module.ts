import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserComponent } from './user.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    UserComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
