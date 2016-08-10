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


module.exports = router;
