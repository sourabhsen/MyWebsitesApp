var express = require('express');
var router = express.Router();


var Posts =  require('../model/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/app/*', function(req, res, next) {
  res.redirect('/');
});

router.get('/blogs',function(req,res,next){
     console.log(Posts);
     Posts.find({}).sort({created_at: 'desc'}).exec(function(err,result) {
          if(err){
              next(err);
          }else if(result.length === 0){
              console.log('there is no record');
              res.send('there is no record')
          }else{
             res.json(result);
          }
     })
})
router.param('post',function(req,res,next,id){
   var query = Posts.findById(id);

   query.exec(function(err,post){
          if (err) { return next(err); }
          if (!post) { return next(new Error('can\'t find post')); }

          req.post = post;
          return next();
        })

})

router.put('/post/:post/upvote',function(req,res,next){
     req.post.upvote(function(err,result){
         if(err){
            next(err);
         }else{
           Posts.find({}).sort({created_at: 'desc'}).exec(function(err,result) {
                  if(err){
                      next(err);
                  }else if(result.length === 0){
                      console.log('there is no record');
                      res.send('there is no record')
                  }else{
                    res.json(result);
                  }
            })
         }
     })
});

router.put('/post/:post/downvote',function(req,res){
     req.post.downvote(function(err,post){
          if(err){ 
            return next(err);
          }else{
               Posts.find({}).sort({created_at: 'desc'}).exec(function(err,result) {
                  if(err){
                      next(err);
                  }else if(result.length === 0){
                      console.log('there is no record');
                      res.send('there is no record')
                  }else{
                    res.json(result);
                  }
            })
          }
          
     })
})




module.exports = router;
