import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CraftinfoPage } from './craftinfo';

@NgModule({
  declarations: [
    CraftinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CraftinfoPage),
  ],
})
export class CraftinfoPageModule {}
