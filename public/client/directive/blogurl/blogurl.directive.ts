import {Directive,ElementRef,Input} from 'angular2/core';


@Directive({
    selector: '[blogHref]'
  
})

export class BlogurlDirective{
     private el: HTMLElement;

     constructor(el: ElementRef) { 
         this.el = el.nativeElement; 
         this.getUrl();    
    }

     @Input('blogHref') blogHrefUrl: Array<Object>;
     getUrl(){
        let url = this.blogHrefUrl;
        debugger;
     }
     
}