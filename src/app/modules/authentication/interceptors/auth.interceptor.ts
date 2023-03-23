import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const shouldBeApiUrl = request.url.startsWith(environment.apiUrl);
    const accessToken = this.localStorageService.getAccessToken();

    if (shouldBeApiUrl && accessToken) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + accessToken },
      })
    }

    return next.handle(request);
  }
}
