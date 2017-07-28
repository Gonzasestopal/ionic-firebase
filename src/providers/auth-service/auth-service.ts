import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthService {
  public currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }
  
  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }
  
  signInWithEmailAndPassword(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword)
  }
  
  signInWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return this.afAuth.auth.signInWithCredential(credential);
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => this.signInWithCredential(result.credential));
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
  
  addUser(credential: any) {
    this.db.object('/users/' + credential.uid).set({
      email: credential.email
    });
  }
  
  getUserSubjects(uid: any): any {
    return this.db.list('/subjects')
      .map(data => data.filter(data => (uid in data.members))
      // .map(function(e) { return e.$key })
    )
  }
  
  getUserNotices(uid: any): any {
    return this.db.list('/subjects')
      .map(data => data.filter(data => uid in data.members))
      .flatMap(subjects => {
        subjects.map(function(e) { return e.$key })
        return this.db.list('/notices')
          .map(data => data.filter(data => {
          console.log(subjects)}))
          

          // .map(notices => (notices.filter(notice => {
          //   console.log(notice);
          //   console.log(subjects.map(function(e) { return e.$key}));
          // })))

      })

  }
  
  getNotices(): any {
    return this.db.list('/notices').map( data => {
      return this.db.list('/subjects');
    })
  }

}