import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {HeaderComponent} from '../header/header.component';
import {AppComponent} from '../dashboard/dashboard.component';
import {AppContentComponent} from '../content/content.component';
import {ProfileComponent} from '../profile/profile.component'

import {MyBlogComponent} from '../Blog/blog.component';
import {MyBlogDetailComponent} from '../Blog/blogdetail.component';


@Component({
    selector: 'my-app',
    templateUrl: './client/Component/appmain/appmain.html',
    directives: [HeaderComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/home', name:'Home',component:AppContentComponent, useAsDefault:true},
  {path:'/profile', name:'Profile',component:ProfileComponent},
  {path:'/message', name:'Message',component:AppComponent},
  {path:'/blog',name:'Blog',component:MyBlogComponent},
 
  {path: '/**', redirectTo: ['Home'] }
])

export class AppMainComponent { }

