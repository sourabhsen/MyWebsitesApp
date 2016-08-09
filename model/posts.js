var mongoose = require('mongoose');
var express = require('express');
var app = express();


var Schema = mongoose.Schema;

var Postschema = new Schema({
    title:String,
    description:{type: String, required:true},
    link:String,
    created_at: String,
    updated_at: String 
});

// on every save, add the date
Postschema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date().toDateString();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model('Posts',Postschema);  