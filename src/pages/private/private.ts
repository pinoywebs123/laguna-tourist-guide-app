import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivateinfoPage } from '../privateinfo/privateinfo';
/**
 * Generated class for the PrivatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private',
  templateUrl: 'private.html',
})
export class PrivatePage {

  data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
    {id: 21},
    {id: 22},
    {id: 23},
    {id: 24},
    {id: 25}
    
    
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivatePage');
  }

  clickPrivate(item){
      this.navCtrl.push(PrivateinfoPage, item)
  }

}
