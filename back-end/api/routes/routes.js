'use strict';
module.exports = function(app) {
  var championsList = require('../controllers/champions.controller');
  var itemsList = require('../controllers/items.controller');

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
};
