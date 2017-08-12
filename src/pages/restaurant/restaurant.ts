import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantinfoPage } from '../restaurantinfo/restaurantinfo';
/**
 * Generated class for the RestaurantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  data = [
        {id: "r1", title: "SULYAP GALLERY CAFÉ AND RESTAURANT"},
        {id: "r2", title: "KANIN CLUB RESTAURANT"},
        {id: "r3", title: "MAMA LOU'S ITALIAN KITCHEN RESTAURANT"},
        {id: "r4", title: "SOCRATES' SECRET RESTAURANT"},
        {id: "r5", title: "TED'S RESTAURANT"},

        {id: "r6", title: "DALCIELO RESTAURANT"},
        {id: "r7", title: "LETY'S BUKO PIE"},
        {id: "r8", title: "HERB REPUBLIC RESTAURANT"},
        {id: "r9", title: "SUKI ALFRESCO RESTAURANT"},
        {id: "r10", title: "IPPON YARI RESTAURANT"},

        {id: "r11", title: "SEOUL KITCHEN (NADEURI KITCHEN FOODS) RESTAURANT"},
        {id: "r12", title: "SI CHRISTINA GATEAU SANS RIVAL RESTAURANT"},
        {id: "r13", title: "CONTI'S RESTAURANT"},
        {id: "r14", title: "SAMUEL'S PLATE/GASTROPUB RESTAURANT"},
        {id: "r15", title: "BAHAY KAWAYAN RESTAURANT"},

        {id: "r16", title: "HOKKAIDO SANTOUKA RAMEN RESTAURANT"},
        {id: "r17", title: "THE HOUSE OF BAWAI RESTAURANT"},
        {id: "r18", title: "FAUSTINA'S RESTAURANT"},
        {id: "r19", title: "VENICE RESTAURANT"},
        {id: "r20", title: "BUGONG RESTAURANT"},

        {id: "r21", title: "SATYA GRAHA CAFE AND RESTAURANT"},
        {id: "r22", title: "CRISOSTOMO RESTAURANT"},
        {id: "r23", title: "CHEZ DEO RESTAURANT"},
        {id: "r24", title: "CHUBBY HABBI'S MEDITERRANEAN GRILL RESTAURANT"},
        {id: "r25", title: "SIENTO CAFE RESTAURANT"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  clickRestaurant(we){
    this.navCtrl.push(RestaurantinfoPage, we);
  }

}
