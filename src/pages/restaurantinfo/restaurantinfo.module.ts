import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantinfoPage } from './restaurantinfo';

@NgModule({
  declarations: [
    RestaurantinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantinfoPage),
  ],
})
export class RestaurantinfoPageModule {}
