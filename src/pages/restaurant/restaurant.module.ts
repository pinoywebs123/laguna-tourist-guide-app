import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPage } from './restaurant';

@NgModule({
  declarations: [
    RestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantPage),
  ],
})
export class RestaurantPageModule {}
