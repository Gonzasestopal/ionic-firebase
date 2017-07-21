import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  card: any;
  showHide: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.card = navParams.get('card');
    this.showHide = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  
  toggleComments() {
    this.showHide = !this.showHide;
  }

}
