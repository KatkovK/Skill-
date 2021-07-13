import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeButtonService {

  buttonLog = [{"name": "login", "icon": "/assets/img/icons/v-in.svg"}];
  buttonReg = [{"name": "register", "icon": "/assets/img/icons/men+.svg"}];
  buttonCreate = [
    {"name": "cancel", "icon": "/assets/img/icons/cansel.svg"},
    {"name": "create", "icon": "/assets/img/icons/create.svg"}
  ];

  constructor() { }

  getButtonLog(): Observable<any[]> {
    return of(this.buttonLog);
  };

  getButtonReg(): Observable<any[]> {
    return of(this.buttonReg);
  };

  getButtonCreate(): Observable<any[]> {
    return of(this.buttonCreate);
  };

}
