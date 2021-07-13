import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelInputService {
  user = [
    { 'name': 'identifier', 'label': 'Username', 'type': 'text', 'handler': '6 symbols or more' },
    { 'name': 'password', 'label': 'Password', 'type': 'password', 'handler': '6 symbols or more' }, 
  ]; 
  userRegister = [
    { 'name': 'identifier', 'label': 'Username', 'type': 'text', 'handler': '6 symbols or more' },
    { 'name': 'password', 'label': 'Password', 'type': 'text', 'handler': '6 symbols or more' },
    { 'name': 'password', 'label': 'Confirm password', 'type': 'text', 'handler': 'repeat password' }
  ];
  article = [
    { 'name': 'title', 'label': 'Title', 'type': 'text', 'handler': 'Up to 70 sumbols'},
    { 'name': 'annotation', 'label': 'Annotation', 'type': 'text', 'handler': 'Couple of sentences'},
  ]
  constructor() { }

  getUser(): Observable<any[]> {
    return of(this.user);
  }

  getUserRegister(): Observable<any[]> {
    return of(this.userRegister);
  }

  getArticle(): Observable<any[]> {
    return of(this.article);
  }

}
