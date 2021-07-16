import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ArticleCreate } from 'src/app/features/models/articles';
import { ArticleService } from 'src/app/features/services/article-service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})

export class CreateArticleComponent implements OnInit {
  buttons = [{"name": "cancel", "type": "button", "icon": "/assets/img/icons/cansel.svg"},
    { "name": "create", "type": "submit", "icon": "/assets/img/icons/createWh.svg" }
  ];
  imputs = [
    { 'name': 'title', 'label': 'Title', 'type': 'text', 'handler': 'Up to 70 sumbols' },
    { 'name': 'annotation', 'label': 'Annotation', 'type': 'text', 'handler': 'Couple of sentences' },
  ]

  form;

  id: string | undefined;

  article: ArticleCreate[] = [];

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.paramMap.pipe(
      switchMap(params => params.getAll('id'))).subscribe((data) => this.id = data);

    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe((article) => {

        this.form = this.fb.group({
          title: article.title,
          annotation: article.annotation,
          text: article.text,
          imag: '',
        });
      })
    } else {
      this.form = this.fb.group({
        title: '',
        annotation: '',
        text: '',
        imag: '',
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.id) {
      this.articleService.updateArticle(this.form.value).subscribe(
        (res) => this.router.navigate(['feedview']),
        (error) => console.log('error')
      );
      this.form.reset();
    }
    else {
      this.articleService.addArt(this.form.value).subscribe(
        (res) => this.router.navigate(['feedview']),
        (error) => console.log('error')
      );
      console.log(this.form.value);
      this.form.reset();
    }
  }

  cancel() {
    this.router.navigate(['feedview']);
  }
}



// {"name": "cancel", "type": "button", "icon": "/assets/img/icons/cansel.svg"},