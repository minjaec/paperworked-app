import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { MaterialModule } from 'src/app/material/material.module';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {

  project:Project;

  //https://material.angular.io/cdk/drag-drop/overview

  instructions = [
    'Introduction',
    'Disclaimer',
    'Section 1',
    'Item 1',
    'Item 1 a',
    'Item 2',
    'Item 3',
    'Section 2',
    'Item 1',
    'Item 1 a',
    'Item 2',
    'Item 3',
    'Section 2',
    'Item 1'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.instructions, event.previousIndex, event.currentIndex);
  }

  constructor(private editor : EditorService) {
  }

  ngOnInit() {
    console.log("editAreaInit"); 
    this.project = this.editor.currentProjectData;
    console.log(this.project);
  }

}
