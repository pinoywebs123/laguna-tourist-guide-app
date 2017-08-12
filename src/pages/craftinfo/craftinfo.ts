import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CraftinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-craftinfo',
  templateUrl: 'craftinfo.html',
})
export class CraftinfoPage {
  item :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.item);
  }

}
