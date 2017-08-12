import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristPage } from './tourist';

@NgModule({
  declarations: [
    TouristPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristPage),
  ],
})
export class TouristPageModule {}
