import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

import { PrivacyPolicyComponent } from './pages/policies/privacy/privacy.component'; 
import { CookiesPolicyComponent } from './pages/policies/cookies/cookies.component';

export const routes: Routes = [
  
    { path: '', component: HomeComponent },

    { path: 'portfolio', component: PortfolioComponent },
    
    { path: 'contact', component: ContactComponent },
    
    { path: 'privacy', component: PrivacyPolicyComponent },

    { path: 'cookies', component: CookiesPolicyComponent },

    { path: '**', redirectTo: '' }

];
