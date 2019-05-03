import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { MaterialModule } from 'src/app/material/material.module';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EditorService } from 'src/app/services/editor.service';
import { InstructionItem } from 'src/app/models/instruction-item';
import { InstructionItemEditorComponent } from '../instruction-item-editor/instruction-item-editor.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {

  project:Project;
  instructions:InstructionItem[];

  //https://material.angular.io/cdk/drag-drop/overview


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.instructions, event.previousIndex, event.currentIndex);
  }

  constructor(private editor : EditorService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log("editAreaInit"); 
    this.project = this.editor.currentProjectData;
    this.instructions = this.editor.currentProjectInstructions;
    console.log(this.project);
  }

  openModal(e) {
    let dialogRef = this.dialog.open(InstructionItemEditorComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
