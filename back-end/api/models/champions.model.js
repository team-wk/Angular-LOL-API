'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChampionSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  blurb: {
    type: String,
  },
  info: {
  },
  image: {
  },
  tags: {
  },
  partype: {
    type: String,
  },
  stats: {
  }
});

module.exports = mongoose.model('Champions', ChampionSchema);
