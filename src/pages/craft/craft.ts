import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CraftinfoPage } from '../craftinfo/craftinfo';

/**
 * Generated class for the CraftPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-craft',
  templateUrl: 'craft.html',
})
export class CraftPage {
  data = [
    {id: "c1", title: "Barong Embroidery"},
    {id: "c2", title: "Bibingka"},
    {id: "c3", title: "Buko pie"},
    {id: "c4", title: "Caps and Hats"},
    {id: "c5", title: "Cassava cake"},
    {id: "c6", title: "Decorative gardens and plants"},
    {id: "c7", title: "Espasol"},
    {id: "c8", title: "Footwear"},
    {id: "c9", title: "Goat Milk"},
    {id: "c10", title: "Kesong Puti"},
    {id: "c11", title: "kitchenware"},
    {id: "c12", title: "Mer nels cake"},
    {id: "c13", title: "Pandan bags and mats"},
    {id: "c14", title: "Paper mache crafts"},
    {id: "c15", title: "Pineapple"},
    {id: "c16", title: "Puto biñan"},
    {id: "c17", title: "Rattan chairs and hammocks"},
    {id: "c18", title: "Uraro"},
    {id: "c19", title: "Wood carving"},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CraftPage');
  }

  clickCraft(wa){
    this.navCtrl.push(CraftinfoPage, wa);
  }

}
