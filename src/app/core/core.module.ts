import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SideBarComponent } from './component/side-bar/side-bar.component';



@NgModule({
  declarations: [
  SideBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [ SideBarComponent ],
  providers: []

})
export class CoreModule { }
