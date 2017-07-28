import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private _auth: AuthService) {
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then((credentials) => this.onSignInSuccess(credentials));
  }
  
  private onSignInSuccess(credential): void {
    this._auth.addUser(credential);
    this.navCtrl.setRoot(TabsPage);
  }
}
