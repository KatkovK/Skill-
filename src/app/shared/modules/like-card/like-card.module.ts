import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeCardComponent } from './like-card.component';



@NgModule({
  declarations: [LikeCardComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeCardComponent]
})
export class LikeCardModule { }
