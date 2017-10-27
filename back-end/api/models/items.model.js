'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  plaintext: {
    type: String,
  },
  image: {
  },
  gold: {
  },
  tags: {
  },
  stats: {
  },
});

module.exports = mongoose.model('Items', ItemSchema);
