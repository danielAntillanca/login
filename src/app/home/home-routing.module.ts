import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UsuariosPage } from '../usuarios/usuarios.page';
import { GeolocasitionPage } from '../geolocasition/geolocasition.page';
import { AgregarPage } from '../agregar/agregar.page';
// Se declaran las rutas hijas que se cargaran al interior de Page Home
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'usuarios',
        component:UsuariosPage
      },
      {
        path:'geolocasition',
        component:GeolocasitionPage
      },
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}