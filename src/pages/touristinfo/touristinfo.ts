import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TouristinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touristinfo',
  templateUrl: 'touristinfo.html',
})
export class TouristinfoPage {
  item : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
   console.log(this.item);
  }

}
