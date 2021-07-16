import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/features/services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuth) {
      req = req.clone({
        setHeaders: {
          Autorization: this.authService.token
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login'])
        }
        return throwError(error);
      }
      )
    );
  }
}
