import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { HTTP_PROVIDERS} from '@angular/http';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app';



if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ 
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provide(LocationStrategy, { useClass: HashLocationStrategy })

]);


