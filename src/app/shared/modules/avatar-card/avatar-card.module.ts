import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarCardComponent } from './avatar-card.component';



@NgModule({
  declarations: [ AvatarCardComponent ],
  imports: [
    CommonModule
  ],
  exports: [ AvatarCardComponent ]
})
export class AvatarCardModule { }
