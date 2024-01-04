"use strict";

var mongoose = require('mongoose');

var User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'user-data'
});
var model = mongoose.model('UserData', User);
module.exports = model;