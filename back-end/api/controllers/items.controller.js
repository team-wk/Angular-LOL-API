'use strict';

var mongoose = require('mongoose'),
  Item = mongoose.model('Items');

exports.list_all_items = function(req, res) {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.create_a_item = function(req, res) {
  var new_item = new Itemn(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.read_a_item = function(req, res) {
  Item.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_a_item = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_a_item = function(req, res) {
  Item.remove({
    _id: req.params.championId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};
