'use strict';

var mongoose = require('mongoose'),
  Champion = mongoose.model('Champions');

exports.list_all_champions = function(req, res) {
  Champion.find({}, function(err, champion) {
    if (err)
      res.send(err);
    res.json(champion);
  });
};

exports.create_a_champion = function(req, res) {
  var new_champion = new Champion(req.body);
  new_champion.save(function(err, champion) {
    if (err)
      res.send(err);
    res.json(champion);
  });
};

exports.read_a_champion = function(req, res) {
  Champion.findById(req.params.championId, function(err, champion) {
    if (err)
      res.send(err);
    res.json(champion);
  });
};

exports.update_a_champion = function(req, res) {
  Champion.findOneAndUpdate({_id: req.params.championId}, req.body, {new: true}, function(err, champion) {
    if (err)
      res.send(err);
    res.json(champion);
  });
};

exports.delete_a_champion = function(req, res) {
  Champion.remove({
    _id: req.params.championId
  }, function(err, champion) {
    if (err)
      res.send(err);
    res.json({ message: 'Champion successfully deleted' });
  });
};
