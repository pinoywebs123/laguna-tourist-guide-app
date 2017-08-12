import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivatePage } from './private';

@NgModule({
  declarations: [
    PrivatePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivatePage),
  ],
})
export class PrivatePageModule {}
