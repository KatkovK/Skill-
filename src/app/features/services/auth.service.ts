import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IAuthUser, IRegisterUser } from '../models/.authUser.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
   
  url = environment.apiUrl;

  get token() {
    return localStorage.getItem('auth-token');
  };

  get isAuth(): boolean {
    return !!this.token;
  };

  constructor(private http: HttpClient) { };

  login(user: IAuthUser): Observable<{ token: string }> {

    return this.http.post<{ token: string }>(`${this.url}auth/local/`, user)
      .pipe(tap(({ token }) => {
        localStorage.setItem('auth-token', token);
      }
      ));
  };

  register(user: IRegisterUser): Observable<any> {

    return this.http.post<IRegisterUser>(`${this.url}auth/local/register/`, user)
  };

  logout() {
    localStorage.clear();
  }
}

