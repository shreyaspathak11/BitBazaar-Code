"use strict";

var mongoose = require('mongoose');

var Google = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
}, {
  collection: 'google-data'
});
var model = mongoose.model('GoogleData', Google);
module.exports = model;