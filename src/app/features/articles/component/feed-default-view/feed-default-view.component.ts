import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/features/services/article-service';
import { Article } from '../../../models/articles';


@Component({
  selector: 'app-feed-default-view',
  templateUrl: './feed-default-view.component.html',
  styleUrls: ['./feed-default-view.component.scss']
})
export class FeedDefaultViewComponent implements OnInit {
article;
articles: Article[] = [];

  constructor(
    private articleservice: ArticleService,
    private router: Router,
    private activatedRouter: ActivatedRoute
    ) { 
  }

  ngOnInit(): void {
   this.articleservice.getArticles().subscribe((articles: Article[]) => {
     this.articles = articles
   })
  };

  goToDetails(id) {
    this.router.navigate([id], { relativeTo: this.activatedRouter })
    console.log(id);
    
   };

  

}
