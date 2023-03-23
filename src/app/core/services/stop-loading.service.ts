import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopLoadingService {

  LoadingController: BehaviorSubject<{load: boolean, message: string}> = new BehaviorSubject<{load: boolean, message: string}>({
    load: true,
    message: ''
  });

  constructor() { }
}
