import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

import { DocumentDisplayAreaComponent } from '../../editor/document-display-area/document-display-area.component';
import { EditAreaComponent } from '../../editor/edit-area/edit-area.component';
import { InstructionItemEditorComponent } from '../../editor/instruction-item-editor/instruction-item-editor.component';
import { InstructionListComponent } from '../../editor/instruction-list/instruction-list.component';
import { InstructionItemComponent } from '../../editor/instruction-item/instruction-item.component';
import { EditorMenuBarComponent } from 'src/app/editor/editor-menu-bar/editor-menu-bar.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  currentProject;

  constructor(private firebase : FirebaseService) { }

  ngOnInit() {
    this.currentProject = this.firebase.getCurrentProjectData();
  }

}
