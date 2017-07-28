import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import * as firebase from 'firebase/app';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  
  user: firebase.User;

  constructor(private _auth: AuthService) {
    this.user = this._auth.currentUser;
  }
  
  ionViewDidLoad() {
  }
}
