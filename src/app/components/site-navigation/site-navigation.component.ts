import { Component, OnInit } from '@angular/core';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  constructor(private firebase : FirebaseService,
    private auth : AngularFireAuth) { }

  ngOnInit() {
  }

}
