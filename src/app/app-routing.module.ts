import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PlayerComponent } from './pages/player/player.component';

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'player', component: PlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
