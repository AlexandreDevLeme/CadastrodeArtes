import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCadPageRoutingModule } from './tela-cad-routing.module';

import { TelaCadPage } from './tela-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCadPageRoutingModule
  ],
  declarations: [TelaCadPage]
})
export class TelaCadPageModule {}
