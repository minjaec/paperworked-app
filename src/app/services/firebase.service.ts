import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection }
  from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userId;
  userPhotoURL;

  constructor(
    public afStore: AngularFireStorage,
    public afDB: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe(auth => {
      if (auth) {
        this.userId = auth.uid;
        this.userPhotoURL = auth.photoURL;
      }
    })
  }

  // https://angularfirebase.com/snippets/check-if-current-user-exists-with-angularfire/
}