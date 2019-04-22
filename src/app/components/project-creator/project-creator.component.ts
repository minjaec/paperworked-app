import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {

  @Input() filename:string;
  @Input() filepath:string;
  @Input() fileURL:string;

  constructor(private firebase : FirebaseService) { }

  ngOnInit() {

  }

}
