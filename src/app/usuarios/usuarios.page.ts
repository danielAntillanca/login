import { Component, OnInit } from '@angular/core';
import { ApiusuariosService } from '../services/apiusuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage  {
  obtenerdatos:any []=[];

  constructor(public api:ApiusuariosService) {
    this.api.obtenerdatos<any[]>("").subscribe(data => {

      this.obtenerdatos= data

    })
   }

}