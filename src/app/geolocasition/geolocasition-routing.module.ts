import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocasitionPage } from './geolocasition.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocasitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocasitionPageRoutingModule {}
