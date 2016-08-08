import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {ProfileWidgetComponent} from '../profile-widget/profilewidget.component';
import {ProfileWidgetAboutComponent} from '../profile-widget-about/profilewidgetabout.component';
import {FeedComponent} from '../feed/feed.component';

@Component({
    templateUrl: './client/Component/content/content.html',
    directives: [ProfileWidgetComponent,ProfileWidgetAboutComponent,FeedComponent]
  
})


export class AppContentComponent { }