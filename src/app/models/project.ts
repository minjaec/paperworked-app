import { Time } from '@angular/common';
import { InstructionItem } from './instruction-item';
import * as firebase from 'firebase';

export interface Project {
    author: string,
    created: firebase.firestore.Timestamp,
    description: string,
    editorVersion: string,
    fullFilePath: string,
    imageURLs: string[],
    initialized: boolean,
    instructions: InstructionItem[],
    lastEdit: firebase.firestore.Timestamp,
    name: string,
    numPages: number,
    published: boolean,
    type: string
}