import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) =>   
       this.articleService.getArticleById(params.get('id')))).subscribe((art)=>{
            this.article.push(art)
    });
  }
}
