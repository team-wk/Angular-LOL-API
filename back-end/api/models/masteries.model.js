'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MasterySchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
  },
  ranks: {
    type: Number,
  },
});

module.exports = mongoose.model('Masteries', MasterySchema);
