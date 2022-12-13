import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocasitionPageRoutingModule } from './geolocasition-routing.module';

import { GeolocasitionPage } from './geolocasition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocasitionPageRoutingModule
  ],
  declarations: [GeolocasitionPage]
})
export class GeolocasitionPageModule {}
