import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { MaterialModule } from 'src/app/material/material.module';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {

  @Input() project;

  //https://material.angular.io/cdk/drag-drop/overview

  movies = [
    'Introduction',
    'Disclaimer',
    'Section 1',
    'Item 1',
    'Item 1 a',
    'Item 2',
    'Item 3',
    'Section 2',
    'Item 1'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}
