import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCadPageRoutingModule } from './user-cad-routing.module';

import { UserCadPage } from './user-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCadPageRoutingModule
  ],
  declarations: [UserCadPage]
})
export class UserCadPageModule {}
