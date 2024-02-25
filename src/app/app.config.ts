import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { API_BASE_URL } from './tokens/api-base-url.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration(),
    // TODO: Make this dynamic depending on environment.
    { provide: API_BASE_URL, useValue: environment.apiUrl }
  ]
};
