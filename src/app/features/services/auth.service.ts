import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IAuthUser } from '../models/authUser';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _token = '';

  constructor(private http: HttpClient) { };

  login(user: IAuthUser): Observable<{ token: string }> {
    
    return this.http.post<{ token: string }>('http://skillplus.germanywestcentral.cloudapp.azure.com:1337/auth/local/', user)
      .pipe(tap(({ token }) => {
        localStorage.setItem('auth-token', token);
        this._token = token;
      }
      ));
  };

  set token(token) {
    this._token = token;
  };

  get token() {
    return this._token;
  };

  get isAuth(): boolean {
    return !!this._token;
  };

}

