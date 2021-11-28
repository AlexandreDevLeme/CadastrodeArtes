import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubrePageRoutingModule } from './subre-routing.module';

import { SubrePage } from './subre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubrePageRoutingModule
  ],
  declarations: [SubrePage]
})
export class SubrePageModule {}
