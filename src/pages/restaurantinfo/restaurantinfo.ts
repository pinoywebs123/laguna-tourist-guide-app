import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantinfo',
  templateUrl: 'restaurantinfo.html',
})
export class RestaurantinfoPage {
  item :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.item);
  }

}
