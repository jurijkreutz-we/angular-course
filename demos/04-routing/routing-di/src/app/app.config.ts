import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { appState } from './state/app.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()), // holt sich Daten aus der URL und übergibt sie dem Komponent weiter als Input
        provideAnimations(),
        importProvidersFrom([
            MarkdownModule.forRoot(),
            MatSnackBarModule,
            MatDialogModule,
            provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            provideAuth(() => getAuth()),
        ]),
        provideStore(),
        provideState(appState),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), connectInZone: true })
    ],
};
