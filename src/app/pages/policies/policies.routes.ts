import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookiesComponent } from './cookies/cookies.component';

export default [
    
    { path: 'privacy', component: PrivacyComponent },
    { path: 'cookies', component: CookiesComponent }

] as Routes;