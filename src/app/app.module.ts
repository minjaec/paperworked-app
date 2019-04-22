import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { LandingComponent } from './pages/landing/landing.component';
import { EditorComponent } from './pages/editor/editor.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { SiteNavigationComponent } from './components/site-navigation/site-navigation.component';
import { InstructionItemComponent } from './editor/instruction-item/instruction-item.component';
import { InstructionItemEditorComponent } from './editor/instruction-item-editor/instruction-item-editor.component';
import { InstructionListComponent } from './editor/instruction-list/instruction-list.component';
import { EditAreaComponent } from './editor/edit-area/edit-area.component';
import { DocumentDisplayAreaComponent } from './editor/document-display-area/document-display-area.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { FirebaseService } from './services/firebase.service';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { SignupComponent } from './pages/signup/signup.component';
import { UploaderDirective } from './directives/uploader.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProjectCreatorComponent } from './components/project-creator/project-creator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EditorComponent,
    HomeComponent,
    PlayerComponent,
    SiteNavigationComponent,
    InstructionItemComponent,
    InstructionItemEditorComponent,
    InstructionListComponent,
    EditAreaComponent,
    DocumentDisplayAreaComponent,
    AuthModalComponent,
    SignupComponent,
    UploaderComponent,
    UploaderDirective,
    ProjectCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'paperworked'),
    AngularFireStorageModule, 
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      () => "paperworked",
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: 'signup'
      }),
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
