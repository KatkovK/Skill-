import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [
  SideBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }
]
  
})
export class CoreModule { }
