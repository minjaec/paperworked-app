import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {

  @Input() filename: string;
  @Input() filepath: string;
  // @Input() fileURL:string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //https://angular.io/guide/reactive-forms

  constructor(
    private firebase: FirebaseService,
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  create() {
    // fix this to use value from forms
    this.firebase.createProject(this.filename, this.filepath);
    this.router.navigate(['/home']);
  }
}
