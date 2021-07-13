import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from 'src/app/core/component/side-bar/side-bar.component';
import { FeedDefaultViewComponent } from '../articles/component/feed-default-view/feed-default-view.component';
import { LoginComponent } from './login/login.component';
import { MainAuthComponent } from './main-auth/main-auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: MainAuthComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent} 
   
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
