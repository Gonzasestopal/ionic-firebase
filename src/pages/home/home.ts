import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { LoginPage } from '../login/login';

import { Calendar } from '@ionic-native/calendar';

import { AuthService } from '../../providers/auth-service/auth-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  items: Observable<any[]>;
  notices: Observable<any[]>;
  test: Observable<any[]>;
  user: any;
  cards: any[];

  constructor(public navCtrl: NavController, private calendar: Calendar, private _auth: AuthService) {
    this.cards = [];
    this.user = this._auth.currentUser;
    this.items = this._auth.getUserSubjects(this.user.uid);
    this.notices = this._auth.getUserNotices(this.user.uid);
    this.test = this._auth.getNotices();
    let today = new Date();
    let todayPlusSix = new Date();
    let todayPlusTwelve = new Date();
    todayPlusSix.setHours( today.getHours() + 6);
    todayPlusTwelve.setHours( today.getHours() + 12);
    this.cards.push({
        user: "Marty McFly",
        type: "teacher",
        catedra: "Analisis Matematico",
        content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
        comment: 3,
        place: 'Aula Magna',
        date: new Date(2017,7,28),
        posted: Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
        comments: [
          {
            'user': 'Gonzalo Augusto Sestopal',
            'comment': 'Perfecto ahi estare',
            'posted': Math.round(Math.abs(+today - +todayPlusTwelve) / 36e5),
          },
          {
            'user': 'Gino Tomassi',
            'comment': 'En la misma catedra de siempre?',
            'posted': Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
          }
        ]
    });
    this.cards.push({
        user: "Marty McFly",
        type: "student",
        catedra: "Macroeconomía",
        content : "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
        comment : 3,
        posted : new Date(2017,7,28)
    });
    this.cards.push({
        user: "Marty McFly",
        type: "student",
        catedra: "Principios de la administración",
        content : "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
        comment : 3,
        posted : new Date(2017,8,5)
    });
    
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
    
  }
  
  cardSelected(card) {
    this.navCtrl.push(DetailPage, {
      card: card
    });  
  }

  
  signOut() {
    this._auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
  
  ionViewDidLoad() {
    console.log(this.notices);
    console.log(this.items);
    console.log(this.test);
    // console.log(this._auth.getUserNotices(this._auth.currentUser.uid));
    // console.log(this._auth.getUserSubjects(this._auth.currentUser.uid));

  }

  generateArray(obj: Object) {
    return Object.keys(obj).map((key) => { return  obj[key]  });
  }
}
