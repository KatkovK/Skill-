import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ArticleService } from 'src/app/features/services/article-service';
import { Article } from '../../../models/articles';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: Article[] = [];
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) 
  {}

  ngOnInit(): void {
  
  this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');

    this.articleService.getArticleById(id).subscribe((art) => { 
      this.article.push(art);
      console.log(this.article);
    })
  })
  };

  ceateArticle() {
    
    this.router.navigate(['/create'])
  }

  updateArticle() {
    this.router.navigate(['/createarticle'])
  }
}
