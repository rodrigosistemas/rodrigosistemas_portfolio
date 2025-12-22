import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Configuración de idioma
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';

import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';


registerLocaleData(es);

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top'
    })),
    provideAnimationsAsync(), provideNzI18n(es_ES), importProvidersFrom(FormsModule), provideHttpClient()

  ]

};
