import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouristinfoPage } from '../touristinfo/touristinfo';
/**
 * Generated class for the TouristPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourist',
  templateUrl: 'tourist.html',
})
export class TouristPage {

  data = [
        {id: "t1", title: "Lake Caliraya "},
        {id: "t2", title: "Japanese Garden "},
        {id: "t3", title: "Rizal Shrine "},
        {id: "t4", title: "Enchanted Kingdom "},
        {id: "t5", title: "Mount Makiling "},
        {id: "t6", title: "Makiling Botanical Garden"},
        {id: "t7", title: "National Arts Center "},
        {id: "t8", title: "Pila Heritage Site"},
        {id: "t9", title: "Nagcarlan Underground Cemetery"},
        {id: "t10", title: "Pagsanjan Falls"},
        {id: "t11", title: "Center for Philippine Raptors"},
        {id: "t12", title: "Buruwisan Falls "},
        {id: "t13", title: "Buntot Palos Falls "},
        {id: "t14", title: "Panguil River Eco-Park "},
        {id: "t15", title: "Tayak Hill "},
        {id: "t16", title: "Taytay Falls or Majayjay Falls shoots "},
        {id: "t17", title: "Sampaloc Lake "},
        {id: "t18", title: "Nuvali Santa Rosa "},
        {id: "t19", title: "Paseo de Sta. Rosa "},
        {id: "t20", title: "Lake Muhikap "}

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouristPage');
  }

  clickTour(we){
    this.navCtrl.push(TouristinfoPage, we);
  }

}
