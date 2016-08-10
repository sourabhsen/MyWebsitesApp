import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {AuthService} from 'client/services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './client/Component/header/header.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[AuthService]
})


export class HeaderComponent { 
    
    constructor(private auth_Service:AuthService){
    

        this.getList();

    }

  getList(){
    let self = this; 
    
    
    }
}