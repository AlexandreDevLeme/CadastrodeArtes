import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCadPage } from './user-cad.page';

const routes: Routes = [
  {
    path: '',
    component: UserCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCadPageRoutingModule {}
