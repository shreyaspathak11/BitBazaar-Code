"use strict";

var mongoose = require('mongoose');

var Member = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  collection: 'member-data'
});
var model = mongoose.model('MemberData', Member);
module.exports = model;