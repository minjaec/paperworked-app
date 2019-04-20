import { Injectable } from '@angular/core';

import { AngularFirestoreModule, AngularFirestoreDocument, AngularFirestoreCollection } 
from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor() { }
}
