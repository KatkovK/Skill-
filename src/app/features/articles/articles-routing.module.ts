import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ArticlePageComponent } from './component/article-page/article-page.component';
import { CreateArticleComponent } from './component/create-article/create-article.component';
import { FeedDefaultViewComponent } from './component/feed-default-view/feed-default-view.component';

const routes: Routes = [

      {path: 'feedview', component: FeedDefaultViewComponent,canActivate: [AuthGuard]},
     
        {path: 'feedview/:id', component: ArticlePageComponent},
        {path: 'feedview/:create', component: CreateArticleComponent},
        {path: 'feedview/:id/:edit', component: CreateArticleComponent},
  ];
      
      
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
