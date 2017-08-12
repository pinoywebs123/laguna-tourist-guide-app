import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityinfoPage } from './cityinfo';

@NgModule({
  declarations: [
    CityinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CityinfoPage),
  ],
})
export class CityinfoPageModule {}
