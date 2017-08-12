import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CityinfoPage } from '../cityinfo/cityinfo';

/**
 * Generated class for the CityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  data = [
      {id: 1, city: "Alaminos"},
      {id: 2, city: "Bay"},
      {id: 3, city: "Biñan"},
      {id: 4, city: "Cabuyao"},
      {id: 5, city: "Calamba"},
      {id: 6, city: "Calauan"},
      {id: 7, city: "Cavinti"},
      {id: 8, city: "Famy"},
      {id: 9, city: "Kalayaan"},
      {id: 10, city: "Liliw"},
      {id: 11, city: "Los Baños"},
      {id: 12, city: "Luisiana"},
      {id: 13, city: "Lumban"},
      {id: 14, city: "Mabitac"},
      {id: 15, city: "Magdalena"},
      {id: 16, city: "Magjayjay"},
      {id: 17, city: "Nagcarlan"},
      {id: 18, city: "Paete"},
      {id: 19, city: "Pagsanjan"},
      {id: 20, city: "Pakil"},
      {id: 21, city: "Pangil"},
      {id: 22, city: "Pila"},
      {id: 23, city: "Rizal"},
      {id: 24, city: "San Pablo"},
      {id: 25, city: "San Pedro"},
      {id: 26, city: "Santa Cruz"},
      {id: 27, city: "Santa Maria"},
      {id: 28, city: "Santa Rosa"},
      {id: 29, city: "Siniloan"},
      {id: 30, city: "Victoria"}
      
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  clickCity(city){
    this.navCtrl.push(CityinfoPage, city);
  }

}
