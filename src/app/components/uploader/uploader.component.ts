import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { finalize } from 'rxjs/operators';
import { ProjectCreatorComponent } from '../project-creator/project-creator.component';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [FirebaseService]
})

// https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
export class UploaderComponent implements OnInit {

  task:AngularFireUploadTask;
  progress:Observable<number>;
  snapshot:Observable<any>;
  downloadURL:Observable<string>;
  filename:string;
  filepath:string;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {}
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  uploadFile(event) {
    const file = event.item(0);
    this.filename = file.name;
    this.filepath = `pdfs/${new Date().getTime()}_${this.filename}`;
    const fileRef = this.firebase.afStore.ref(this.filepath);
    const task = this.firebase.afStore.upload(this.filepath, file);

    this.progress = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}