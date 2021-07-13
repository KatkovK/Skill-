import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModeButtonService } from 'src/app/shared/service/mode-button.service';
import { ModelInputService } from 'src/app/shared/service/model-input.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users = [];
  buttons =[];
  formForm: FormGroup;

  constructor(
    private userModel: ModelInputService,
    private buttonModel: ModeButtonService, 
  )
   {
    this.formForm = new FormGroup ({
      identifier: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
   })
   }

  ngOnInit(): void {
    
    this.userModel.getUserRegister().subscribe((userRegister) => {
      this.users = userRegister;  
    });

    this.buttonModel.getButtonReg().subscribe((buttonReg) => {
      this.buttons = buttonReg;  
    });

  }
  onSubmit() {
    console.log(this.formForm.value);
    
  }
}
