import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastRoutingModule } from './cast-routing.module';
import { CastComponent } from './cast.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CastDetailsComponent,
    CastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CastRoutingModule
  ]
})
export class CastModule { }
