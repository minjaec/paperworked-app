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
    DocumentDisplayAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'paperworked')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
