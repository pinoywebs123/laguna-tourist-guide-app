import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cityinfo',
  templateUrl: 'cityinfo.html',
})
export class CityinfoPage {

  city: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityinfoPage');
  }

}
