import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ResentComentsComponent } from './components/resent-coments/resent-coments.component';
import { ActivityComponent } from './components/activity/activity.component';
import { TagsUsedComponent } from './components/tags-used/tags-used.component';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';


@NgModule({
  declarations: [
    ResentComentsComponent,
    ActivityComponent,
    TagsUsedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule
  ]
})
export class DashboardModule { }
