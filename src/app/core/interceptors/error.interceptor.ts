import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StopLoadingService } from '../services/stop-loading.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private stopLoadingService: StopLoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if ([403].includes(response.status)) {
          this.stopLoadingService.LoadingController.next({load: false, message: ''});
        }

        if ([422].includes(response.status)) {
          this.stopLoadingService.LoadingController.next({load: false, message: 'Email ou mot de passe incorrect'});
        }

        if ([500].includes(response.status)) {
          console.log('ds');
        }

        const error = response.error.message || response.statusText || response.message;

        return of(error);
      })
    );
  }

}
