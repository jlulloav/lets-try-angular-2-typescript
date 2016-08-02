import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from './app.component';
import { appRouterProviders } from "./app.routes";


//loading and configuring in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './shared/in-memory-data.service';

bootstrap(AppComponent, [appRouterProviders,HTTP_PROVIDERS, { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
    ]);
