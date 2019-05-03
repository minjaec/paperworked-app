import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, QueryDocumentSnapshot }
  from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Project } from '../models/project';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userId;
  userPhotoURL;
  userProjectsCollectionRef;
  userProjectsList:QueryDocumentSnapshot<any>[];
  currentProjectDocRef;
  storageRef;

  constructor(
    public afStore: AngularFireStorage,
    public afDB: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    this.storageRef = this.afStore.storage.ref();
    this.auth.authState.subscribe(auth => {
      if (auth) {
        this.userId = auth.uid;
        this.userPhotoURL = auth.photoURL;
      }
    });
    this.userProjectsList = [];
  }

  getCurrentProjectData():Project {
    if(this.currentProjectDocRef) return this.currentProjectDocRef.data();
  }

  loadProjects() {
    console.log(this.userId);
    if (this.userId && this.userProjectsList.length === 0) {
      console.log('loading user projects');
      this.afDB.collection('users').doc(this.userId).collection('projects').get()
        .subscribe(snapshot => {
          snapshot.forEach(doc => {
            this.userProjectsList.push( doc );
          });
        });
      }
  }

  createProject(projectName: string, filePath: string) {
    if (!this.userId) {
      console.log("you are not logged in!");
    } else {

      const project: Project = {
        author: this.userId,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        fullFilePath: filePath,
        name: projectName,
        initialized: false,
        published: false
      };

      this.userProjectsCollectionRef = this.afDB.collection('users').doc(this.userId).collection('projects');
      this.userProjectsCollectionRef.add(project).then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
          this.currentProjectDocRef = doc;
        }
      })
        .catch(err => {
          console.log('Error getting document', err);
        });
    }
  }

  // https://stackoverflow.com/questions/47514419/how-to-add-subcollection-to-a-document-in-firebase-cloud-firestore

}