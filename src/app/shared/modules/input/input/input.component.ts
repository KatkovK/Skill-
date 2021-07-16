import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent implements ControlValueAccessor {

  @Input() input;

  onChange: any = () => { }
  onTouch: any = () => { }
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  inputF: string;

  writeValue(inputF: any) {
    this.inputF = inputF;
  }

}
