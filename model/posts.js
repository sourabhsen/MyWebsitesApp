var mongoose = require('mongoose');
var express = require('express');
var app = express();


var Schema = mongoose.Schema;

var Postschema = new Schema({
    title:String,
    link:String
});

module.exports = mongoose.model('Product',Postschema);  