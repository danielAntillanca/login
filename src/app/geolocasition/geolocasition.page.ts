import { Component, OnInit } from '@angular/core';
import { Geolocation,Geoposition} from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-geolocasition',
  templateUrl: './geolocasition.page.html',
  styleUrls: ['./geolocasition.page.scss'],
})
export class GeolocasitionPage implements OnInit {
  latitud:number
  longitud:number
  constructor(public navCtrl: NavController,private geolocation: Geolocation) { }
  myposition(){
    this.getGeolocation();
  }
  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.latitud = geoposition.coords.latitude;
        this.longitud= geoposition.coords.longitude;
    });
  }
  ngOnInit() {
  }

}
