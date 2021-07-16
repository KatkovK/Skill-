import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  buttons = [{ "name": "register", "type": "submit", "icon": "/assets/img/icons/men+.svg" }];
  inputs = [
    { 'name': 'username', 'label': 'Username', 'type': 'text', 'handler': '6 symbols or more' },
    { 'name': 'email', 'label': 'Email', 'type': 'text', 'handler': 'frick@gmail.com' },
    { 'name': 'password', 'label': 'Password', 'type': 'password', 'handler': '6 symbols or more' }
  ];

  form: FormGroup;

  constructor(private authService: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(
      (res) => this.router.navigate(['/login']),
      (error) =>  console.log('error')
    );
    this.form.reset();
  }
}
