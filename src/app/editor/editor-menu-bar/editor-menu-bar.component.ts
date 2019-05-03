import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-editor-menu-bar',
  templateUrl: './editor-menu-bar.component.html',
  styleUrls: ['./editor-menu-bar.component.css']
})
export class EditorMenuBarComponent implements OnInit {

  @Output() onNext:EventEmitter<any> = new EventEmitter();
  @Output() onPrev:EventEmitter<any> = new EventEmitter();

  prev() {
    this.onPrev.emit("prev");
  }

  next() {
    this.onNext.emit("next");
  }

  constructor() { }

  ngOnInit() {
  }

}
