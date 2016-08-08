import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './home/home.component';
import { ContactUs } from './contact-us/contact-us.component';
import { WhatWeDo } from './what-we-do/what-we-do.component';

const routes: RouterConfig = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'what-we-do', component: WhatWeDo },
    { path: 'contact-us', component: ContactUs }
];

export const appRouterProviders = [
    provideRouter(routes)
];
