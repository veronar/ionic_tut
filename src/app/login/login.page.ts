import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loading;

  constructor(
    private facebook: Facebook,
    private menu: MenuController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  login(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.menu.enable(true);
    // this.navCtrl.goRoot('/home');
    this.navCtrl.navigateRoot('/home');
  }

}
