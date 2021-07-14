import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeButtonService } from 'src/app/shared/service/mode-button.service';
import { ModelInputService } from 'src/app/shared/service/model-input.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formForm: FormGroup;

  authUser = [];
  users = [];
  buttons = [];

  constructor(private auth: AuthService,
    private userModel: ModelInputService,
    private buttonModel: ModeButtonService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.formForm = new FormGroup({
      identifier: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    this.userModel.getUser().subscribe((user) => {
      this.users = user;
    });

    this.buttonModel.getButtonLog().subscribe((buttonLog) => {
      this.buttons = buttonLog;
    })
  }

  onSubmit() {
    if (this.formForm.valid) {
      this.auth.login(this.formForm.value)
      .subscribe(
        (res) => this.router.navigate(['/feedview']),
        (error) => console.log('error')
      )
    console.log(this.formForm.value);
  } else {
    console.log('error');
    
  }
    }
   
}

