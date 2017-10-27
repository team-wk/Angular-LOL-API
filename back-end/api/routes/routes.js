'use strict';
module.exports = function(app) {
  var championsList = require('../controllers/champions.controller');
  var itemsList = require('../controllers/items.controller');
  var masteriesList = require('../controllers/masteries.controller');

  app.route('/champions')
    .get(championsList.list_all_champions)
    .post(championsList.create_a_champion);

  app.route('/champions/:championId')
    .get(championsList.read_a_champion)
    .put(championsList.update_a_champion)
    .delete(championsList.delete_a_champion);

  app.route('/items')
    .get(itemsList.list_all_items)
    .post(itemsList.create_a_item);

  app.route('/items/:itemId')
    .get(itemsList.read_a_item)
    .put(itemsList.update_a_item)
    .delete(itemsList.delete_a_item);

  app.route('/masteries')
    .get(masteriesList.list_all_masteries)
    .post(masteriesList.create_a_mastery);

  app.route('/masteries/:masteryId')
    .get(masteriesList.read_a_mastery)
    .put(masteriesList.update_a_mastery)
    .delete(masteriesList.delete_a_mastery);
};
