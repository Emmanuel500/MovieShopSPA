import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { CastComponent } from './cast.component';

const routes: Routes = [
  {
    path: '', component: CastComponent,
    children: [
      { path: 'cast-details', component: CastDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastRoutingModule { }
