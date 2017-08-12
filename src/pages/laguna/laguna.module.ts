import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LagunaPage } from './laguna';

@NgModule({
  declarations: [
    LagunaPage,
  ],
  imports: [
    IonicPageModule.forChild(LagunaPage),
  ],
})
export class LagunaPageModule {}
