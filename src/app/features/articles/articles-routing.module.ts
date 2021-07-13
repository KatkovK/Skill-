import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './component/article-page/article-page.component';
import { CreateArticleComponent } from './component/create-article/create-article.component';
import { EditArticleComponent } from './component/edit-article/edit-article.component';
import { FeedDefaultViewComponent } from './component/feed-default-view/feed-default-view.component';

const routes: Routes = [

      {path: 'feedview', component: FeedDefaultViewComponent },
      {path: 'feedview/:id', component: ArticlePageComponent},
      {path: 'feedview/:mode/:id', component: CreateArticleComponent},
      {path: 'feedview/:mode', component: CreateArticleComponent},
      
      {path: 'editarticle', component: EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
