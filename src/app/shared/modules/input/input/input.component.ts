import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() user;
  @Input() formForm: FormGroup;
  // @Input() article;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
