import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  agregar=new Array();
  addagregar= {
    name:"",
    numero:"",
    longitud:"",
    latitud:""
    
  };

  VisibleUpdate:boolean=true;
  VisibleEdit:boolean=false;

  constructor(public navCtlr:NavController) { }

add(agregar){
  this.agregar.push(agregar)
}
edit(agregar){}
update(agregar){}
delete(agregar){}
item(agregar){}
save(agregar){}
execute(agregar){}
}
