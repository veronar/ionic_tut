import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';
import { MenuController, NavController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { DataService } from './services/data.service';

const { SplashScreen, StatusBar } = Plugins;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(
		private platform: Platform,
		// private splashScreen: SplashScreen,
		// private statusBar: StatusBar
		private navCtrl: NavController,
		private menu: MenuController,
		private facebook: Facebook,
		private dataService: DataService
	) {

		SplashScreen.hide().catch((err) => {
			console.warn(err);
		});

		StatusBar.hide().catch((err) => {
			console.warn(err);
		});

		// this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
		});
	}

	logout(): void {

	}
}
