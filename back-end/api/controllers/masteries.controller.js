'use strict';

var mongoose = require('mongoose'),
  Mastery = mongoose.model('Masteries');

exports.list_all_masteries = function(req, res) {
  Mastery.find({}, function(err, mastery) {
    if (err)
      res.send(err);
    res.json(mastery);
  });
};

exports.create_a_mastery = function(req, res) {
  var new_mastery = new Mastery(req.body);
  new_mastery.save(function(err, mastery) {
    if (err)
      res.send(err);
    res.json(mastery);
  });
};

exports.read_a_mastery = function(req, res) {
  Mastery.findById(req.params.masteryId, function(err, mastery) {
    if (err)
      res.send(err);
    res.json(mastery);
  });
};

exports.update_a_mastery = function(req, res) {
  Mastery.findOneAndUpdate({_id: req.params.masteryId}, req.body, {new: true}, function(err, mastery) {
    if (err)
      res.send(err);
    res.json(mastery);
  });
};

exports.delete_a_mastery = function(req, res) {
  Mastery.remove({
    _id: req.params.masteryId
  }, function(err, mastery) {
    if (err)
      res.send(err);
    res.json({ message: 'Mastery successfully deleted' });
  });
};
