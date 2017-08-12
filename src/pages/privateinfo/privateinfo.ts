import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivateinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privateinfo',
  templateUrl: 'privateinfo.html',
})
export class PrivateinfoPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

}
