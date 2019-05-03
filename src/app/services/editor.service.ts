import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { DocumentSnapshot, QueryDocumentSnapshot, DocumentReference } from '@angular/fire/firestore';
import { Project } from '../models/project';
import { InstructionItem } from '../models/instruction-item';

@Injectable({
  providedIn: 'root'
})

export class EditorService {
  getProjectData(): any {
    return this.currentProjectData;
  }
  
  currentProjectDocRef:DocumentReference;
  currentProjectData:Project;
  currentProjectInstructions:InstructionItem[];

  selectProject(project: QueryDocumentSnapshot<any>) {
    console.log("editor service received", project);
    this.currentProjectDocRef = project.ref;
    project.ref.onSnapshot(doc => {
      console.log('Received doc snapshot');
      this.currentProjectData = <Project>doc.data();
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }

  constructor(private firebase : FirebaseService) {
    this.currentProjectInstructions = [
      {name: "Introduction"}
    ];
  }

  logProjectData() {
    console.log(this.currentProjectData);
  }

  addInstruction(instruction:InstructionItem) {
    this.currentProjectInstructions.push(instruction);
  }

  updateInstruction(instruction:InstructionItem) {

  }

  updateField(field:string, value:string) {

  }

}
