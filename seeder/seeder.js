var mongoose = require('mongoose');
var express = require('express');
var app =  express();

var Posts =  require('../model/posts');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sourabhblog');

var posts = [
        new Posts({
            title: 'Start Bootstrap Moves to MIT Licensing',
            link:'http://www.google.com',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            created_at: 'Wed Aug 10 2016',
            updated_at: 'Wed Aug 10 2016' 
        }),
        new Posts({
            title: 'Start Bootstrap Templates Now Have Their Own Repo',
            link: 'http://www.google.com',
            description:'By popular demand I have finally pulled all of the templates on Start Bootstrap into their own personal GitHub repository! What this means is that you can easily fork a template to start a new project directly in GitHub.'
            
        }),
        new Posts({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features'
            
        }),
         new Posts({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features'
            
            
        })
        ]
    
  var count = 0;
  for(var i = 0;i<posts.length;i++){
      posts[i].save(function(err,result){
           console.log('saves sucessfully');
           console.log(result);

      });
     
      
  }  