import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = 'Tabiblib';
  pageTitle = 'Tabiblib';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleOperator: Title
  ) { }

  setTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const childRoute = this.getChild(this.activatedRoute);
      childRoute.data.subscribe((data: any) => {
        this.pageTitle = data.title;
        this.title = data.title + ' - Tabiblib';
        this.titleOperator.setTitle(this.title);
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    }
    else {
      return activatedRoute;
    }
  }
}
