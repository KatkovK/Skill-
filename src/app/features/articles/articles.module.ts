import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { FeedDefaultViewComponent } from './component/feed-default-view/feed-default-view.component';
import { ArticlePageComponent } from './component/article-page/article-page.component';
import { CreateArticleComponent } from './component/create-article/create-article.component';
import { CardElementComponent } from './component/card-element/card-element.component';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AvatarCardModule } from 'src/app/shared/modules/avatar-card/avatar-card.module';
import { LikeCardModule } from 'src/app/shared/modules/like-card/like-card.module';




@NgModule({
  declarations: [
    FeedDefaultViewComponent,
    ArticlePageComponent,
    CreateArticleComponent,
    CardElementComponent,
    
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CoreModule,
    ButtonModule,
    ReactiveFormsModule,
    InputModule,
    AvatarCardModule,
    LikeCardModule
  ],
  providers: [AuthGuard]
})
export class ArticlesModule { }
