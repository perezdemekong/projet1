import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestLoaderService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  startLoading() {
    this.loading.next(true);
  }

  stopLoader() {
    this.loading.next(false);
  }

}
