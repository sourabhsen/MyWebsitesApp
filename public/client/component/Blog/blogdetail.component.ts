import {Component} from 'angular2/core';
import {AuthService} from 'client/services/auth.service';



@Component({
    templateUrl: './client/Component/Blog/blogDetail.html',
    providers:[AuthService]

})

export class MyBlogDetailComponent{
      constructor(private auth_service: AuthService){
     
      }
    
}