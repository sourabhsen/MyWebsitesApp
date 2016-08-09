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
     
        Posts.find(function(err,data){
                  if(err){
                     return next(err);
                  }else{
                     console.log(data);
                     res.json(data);
                  }
        })
     
})


module.exports = router;
