import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHederComponent } from './components/profile-heder/profile-heder.component';
import { PopularArticlesComponent } from './components/popular-articles/popular-articles.component';
import { NewestComponent } from './components/newest/newest.component';


@NgModule({
  declarations: [
    ProfileHederComponent,
    PopularArticlesComponent,
    NewestComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
