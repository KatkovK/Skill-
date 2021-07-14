import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/features/services/article-service';
import { ModeButtonService } from 'src/app/shared/service/mode-button.service';
import { ModelInputService } from 'src/app/shared/service/model-input.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  formForm: FormGroup;
  id;
  article = [];
  buttons = [];

  constructor(
    private userModel: ModelInputService,
    private buttonModel: ModeButtonService,
    private articleService: ArticleService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.formForm = new FormGroup({
      title: new FormControl('', Validators.required),
      annotation: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      imag: new FormControl('')
    });

    this.userModel.getArticle().subscribe((article) => {
      this.article = article;
    });

    this.buttonModel.getButtonCreate().subscribe((button) => {
      this.buttons = button;
    });
     console.log('this.id');
      
  }

  cancel() {
  }
  onSubmit() {
    this.articleService.addArt(this.formForm.value).subscribe(
      (res) => this.router.navigate(['feedview']),
      (error) => console.log('error')
    )

    this.formForm.reset();
  }

}

