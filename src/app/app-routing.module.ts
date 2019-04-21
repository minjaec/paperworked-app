import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PlayerComponent } from './pages/player/player.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'player', component: PlayerComponent},
    {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
