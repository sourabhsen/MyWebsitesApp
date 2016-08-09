import {Component} from 'angular2/core';
import {AuthService} from 'client/services/auth.service';

@Component({
    templateUrl: './client/Component/Blog/blog.html',
    providers:[AuthService]
  
})

export class MyBlogComponent{
      constructor(private auth_service: AuthService){
          this.getBlog();
      }

      getBlog(){
          this.auth_service.getBlogs();
      }
}