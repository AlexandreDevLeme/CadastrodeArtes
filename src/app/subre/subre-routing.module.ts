import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubrePage } from './subre.page';

const routes: Routes = [
  {
    path: '',
    component: SubrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubrePageRoutingModule {}
