var express = require('express'),
  app = express(),
  port = process.env.PORT || 4300,
  mongoose = require('mongoose'),
  Champion = require('./api/models/champions.model'), //created model loading here
  bodyParser = require('body-parser');

  // Add headers
  var cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lolapi');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/champions.routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
