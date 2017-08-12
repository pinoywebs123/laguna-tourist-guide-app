import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristinfoPage } from './touristinfo';

@NgModule({
  declarations: [
    TouristinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristinfoPage),
  ],
})
export class TouristinfoPageModule {}
