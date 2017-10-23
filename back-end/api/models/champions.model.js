'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChampionSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the champion'
  },
  desc: {
    type: String,
    required: 'Enter the description of the champion'
  },
  tags: {
    type: String,
    required: 'Enter the tags of the champion'
  },
});

module.exports = mongoose.model('Champions', ChampionSchema);
