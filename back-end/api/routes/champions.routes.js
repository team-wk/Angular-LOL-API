'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/champions.controller');

  // todoList Routes
  app.route('/champions')
    .get(todoList.list_all_champions)
    .post(todoList.create_a_champion);


  app.route('/champions/:championId')
    .get(todoList.read_a_champion)
    .put(todoList.update_a_champion)
    .delete(todoList.delete_a_champion);
};
