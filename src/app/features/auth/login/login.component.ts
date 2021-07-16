import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  buttons = [{ "name": "login", "type": "submit", "icon": "/assets/img/icons/v-in.svg" }];
  inputs = [
    { 'name': 'identifier', 'label': 'Username', 'type': 'text', 'handler': '6 symbols or more' },
    { 'name': 'password', 'label': 'Password', 'type': 'password', 'handler': '6 symbols or more' },
  ];

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      identifier: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth.login(this.form.value)
        .subscribe(
          (res) => this.router.navigate(['/feedview']),
          (error) => console.log('error')
        )
    } else {
      
      console.log('error');
    }
  }
}



