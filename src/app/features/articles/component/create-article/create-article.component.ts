import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleCreate } from 'src/app/features/models/articles';

import { ArticleService } from 'src/app/features/services/article-service';
import { ModeButtonService } from 'src/app/shared/service/mode-button.service';
import { ModelInputService } from 'src/app/shared/service/model-input.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})

export class CreateArticleComponent implements OnInit {

  formForm: FormGroup;
  id;
  article: ArticleCreate[] = [];
  buttons = [];

  constructor(
    private userModel: ModelInputService,
    private buttonModel: ModeButtonService,
    private articleService: ArticleService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe((article) => {
        this.formForm = new FormGroup({
          title: new FormControl(article.title, Validators.required),
          annotation: new FormControl(article.annotation, Validators.required),
          text: new FormControl(article.text, Validators.required),
          imag: new FormControl('')
        });
      })
      console.log(this.article);

    } else {
      this.formForm = new FormGroup({
        title: new FormControl('', Validators.required),
        annotation: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required),
        imag: new FormControl('')
      });
    }

  }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      this.articleService.getArticleById(id).subscribe((art) => {
        this.article.push(art);
        this.id = art.id;
      })
    });

    this.userModel.getArticle().subscribe((article) => {
      this.article = article;
    });

    this.buttonModel.getButtonCreate().subscribe((button) => {
      this.buttons = button;
    });

  }

  onSubmit() {
    if (this.id) {
      this.articleService.updateArticle(this.formForm.value).subscribe(
        (res) => this.router.navigate(['feedview']),
        (error) => console.log('error')
      );
      console.log(this.formForm.value);
      this.formForm.reset();
    }
    else {
      this.articleService.addArt(this.formForm.value).subscribe(
        (res) => this.router.navigate(['feedview']),
        (error) => console.log('error')
      );
      console.log(this.formForm.value);
      this.formForm.reset();
    }
  }

  cancel() {
    this.router.navigate(['feedview']);
  }
}
