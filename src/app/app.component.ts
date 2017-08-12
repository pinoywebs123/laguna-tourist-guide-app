import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LagunaPage } from '../pages/laguna/laguna';
import { CityPage } from '../pages/city/city';
import { TouristPage } from '../pages/tourist/tourist';
import { AboutPage } from '../pages/about/about';
import { PrivatePage } from '../pages/private/private';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CraftPage } from '../pages/craft/craft';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Laguna', component: LagunaPage },
      { title: 'Cities', component: CityPage },
      { title: 'Tourist Attraction', component: TouristPage },
      { title: 'Private Pools and Resorts', component: PrivatePage },
      { title: 'Restaurants', component: RestaurantPage },
      { title: 'Craft and Products', component: CraftPage },
      { title: 'About Us', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
