import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-instruction-item-editor',
  templateUrl: './instruction-item-editor.component.html',
  styleUrls: ['./instruction-item-editor.component.css']
})
export class InstructionItemEditorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
