'use strict';
module.exports = function(app) {
  var championsList = require('../controllers/champions.controller');

  // todoList Routes
  app.route('/champions')
    .get(championsList.list_all_champions)
    .post(championsList.create_a_champion);


  app.route('/champions/:championId')
    .get(championsList.read_a_champion)
    .put(championsList.update_a_champion)
    .delete(championsList.delete_a_champion);
};
