import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards : any[];

  constructor(public navCtrl: NavController, private calendar: Calendar) {
    this.cards = [];
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
}
