import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import {AppMainComponent} from './component/appmain/appmain.component';

bootstrap(AppMainComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);
