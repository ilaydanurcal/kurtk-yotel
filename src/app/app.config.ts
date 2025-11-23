import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // HTML5 History API kullan (temiz URL'ler, # işareti yok)
    provideRouter(routes)
  ]
};
