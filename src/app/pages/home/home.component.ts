import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EditorService } from 'src/app/services/editor.service';
import { Router } from '@angular/router';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log("oninit");
    this.firebase.loadProjects();
  }

  constructor(private firebase : FirebaseService,
    private editor : EditorService,
    private router: Router) {
    this.firebase.loadProjects();
  }

  openProjectInEditor(project:QueryDocumentSnapshot<any>) : void {
    console.log("opening in editor");
    this.editor.selectProject(project);
    this.router.navigate(['/editor']);
  }
}
