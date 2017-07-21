import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatedraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-catedra',
  templateUrl: 'catedra.html',
})
export class CatedraPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('catedra');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatedraPage');
  }

}
