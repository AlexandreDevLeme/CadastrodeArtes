import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCadPage } from './tela-cad.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCadPageRoutingModule {}
