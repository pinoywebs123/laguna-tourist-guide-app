import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LagunaPage } from '../pages/laguna/laguna';
import { CityPage } from '../pages/city/city';
import { TouristPage } from '../pages/tourist/tourist';
import { PrivatePage } from '../pages/private/private';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CraftPage } from '../pages/craft/craft';
import { CityinfoPage } from '../pages/cityinfo/cityinfo';
import { PrivateinfoPage } from '../pages/privateinfo/privateinfo';
import { TouristinfoPage } from '../pages/touristinfo/touristinfo';
import { CraftinfoPage } from '../pages/craftinfo/craftinfo';
import { RestaurantinfoPage } from '../pages/restaurantinfo/restaurantinfo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // LagunaPage,
    // CityPage,
    // TouristPage,
    // AboutPage,
    //  PrivatePage,
    // RestaurantPage,
    // CraftPage,
    // CityinfoPage,
    // PrivateinfoPage,
    // TouristinfoPage,
    // CraftinfoPage,
    // RestaurantinfoPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LagunaPage,
    CityPage,
    TouristPage,
    AboutPage,
     PrivatePage,
    RestaurantPage,
    CraftPage,
    CityinfoPage,
    PrivateinfoPage,
    TouristinfoPage,
    CraftinfoPage,
    RestaurantinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
