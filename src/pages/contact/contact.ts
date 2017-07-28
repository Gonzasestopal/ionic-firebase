import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  items: any;

  constructor(public navCtrl: NavController) {
    let today = new Date();
    let todayPlusSix = new Date();
    let todayPlusTwelve = new Date();
    todayPlusSix.setHours( today.getHours() + 6);
    todayPlusTwelve.setHours( today.getHours() + 12);
    this.items = [
      {
        catedra: 'Macroeconomía',
        profesor: 'Gonzalo Sestopal',
        date: new Date(2017,7,28),
        posted: Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
        place: 'Box 376',
        content: 'Tutoría',
        commments: [
          {
            'user': 'Gonzalo Augusto Sestopal',
            'comentario': 'Perfecto ahi estare',
            'posted': Math.round(Math.abs(+today - +todayPlusTwelve) / 36e5)
          },
          {
            'user': 'Gino Tomassi',
            'comentario': 'En la misma catedra de siempre?',
            'posted': Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
          }
        ]
      },
      {
        catedra: 'Administración de Empresas',
        profesor: 'Alejandro zanello',
        date: new Date(2017,9,2),
        posted: Math.round(Math.abs(+today - +todayPlusTwelve) / 36e5),
        place: 'Aula Magna',
        content: 'Parcial numero tres',
        commments: [
          {
            'user': 'Gonzalo Augusto Sestopal',
            'comentario': 'Perfecto ahi estare',
            'posted': Math.round(Math.abs(+today - +todayPlusTwelve) / 36e5)
          },
          {
            'user': 'Gino Tomassi',
            'comentario': 'En la misma catedra de siempre?',
            'posted': Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
          }
        ]
      }
    ]
  }
}
