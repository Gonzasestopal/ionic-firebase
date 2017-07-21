import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CatedraPage } from '../catedra/catedra';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  searchQuery: string = '';
  items: any;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  
  initializeItems() {
    let today = new Date();
    let todayPlusSix = new Date();
    let todayPlusTwelve = new Date();
    todayPlusSix.setHours( today.getHours() + 6);
    todayPlusTwelve.setHours( today.getHours() + 12);
    this.items = [
      {
        catedra: 'Administración',
        profesor: 'Gonzalo Sestopal',
        turno: 'Mañana',
        introduccion: 'Esta es una breve introducción a la materia. Saludetes',
        avisos: [
          {
            aviso: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
            tipo: 'student',
            date: new Date(2017,7,28),
            posted: Math.round(Math.abs(+today - +todayPlusSix) / 36e5),
            count: 2,
            place: 'Aula Magna',
            user: 'Gino Tomassi',
            comentarios: [
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
      },
      { catedra: 'Macroeconomía'},
      { catedra: 'Microeconomía'},
      { catedra: 'Analisis Matemático'},
      { catedra: 'Introducción a ciencias sociales'},
      { catedra: 'Contabilidad'},
      { catedra: 'Estadistica'},
      { catedra: 'Comercio Internacional'},
      { catedra: 'Política de Negocios'},
      { catedra: 'Tecnologías de la Información'}
    ];
  }
  
  getItems(ev: any) {
    this.initializeItems();
    
    let val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  catedraSelected(catedra) {
    this.navCtrl.push(CatedraPage, {
      catedra: catedra
    });  
  }
}
