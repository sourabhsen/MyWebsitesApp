import {Component} from 'angular2/core';
import {AuthService} from 'client/services/auth.service';

import {BlogurlDirective} from 'client/directive/blogurl/blogurl.directive';

@Component({
    templateUrl: './client/Component/Blog/blog.html',
    providers:[AuthService]
   
  
})

export class MyBlogComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;

      constructor(private auth_service: AuthService){
          this.getBlog();
      }

      getBlog(){
          let self = this;
          this.auth_service.getBlogs().subscribe(function(response:any){
               self.postItem = JSON.parse(response._body);
               if(!self.postItem.length){
                   self.errorMessage = true;
               }
          }); 
        
      }

      incrementVote(post:any){
          let self = this;
          this.auth_service.updateVote(post).subscribe(function(response:any){
              self.postItem = JSON.parse(response._body);
          })
      }

      decrementVote(post:any){
          let self = this;
          this.auth_service.degradeVote(post).subscribe(function(response:any){
              self.postItem = JSON.parse(response._body);
          })
      }
}