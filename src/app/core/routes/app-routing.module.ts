import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
