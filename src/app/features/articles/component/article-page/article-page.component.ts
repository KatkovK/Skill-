import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ArticleService } from 'src/app/features/services/article-service';
import { Article } from '../../../models/articles';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  
  article: Article[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      this.articleService.getArticleById(id).subscribe((art) => {
        this.article.push(art);
      })
    });
  }
}
