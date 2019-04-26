import { Time } from '@angular/common';
import { InstructionItem } from './instruction-item';
import * as firebase from 'firebase';

export interface Project {
    author: string,
    created: firebase.firestore.FieldValue,
    description?: string,
    editorVersion?: string,
    fullFilePath: string,
    imageURLs?: string[],
    initialized: boolean,
    //instructions will go in a sub-collection, with ID's in the order list.
    instructionOrder?: string[],
    lastEdit?: firebase.firestore.Timestamp,
    name: string,
    numPages?: number,
    published: boolean,
    type?: string
}