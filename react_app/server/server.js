var express     = require('express');
var app         = express(); // defines app using express
var bodyParser  = require('body-parser');

//=================================
//Body Parser Setting
//=================================
//configure app to user bodyParser()
//fetches data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 8080;

//==================================
//Routes for API
//==================================
//get an instance of the express Router
var router = express.Router();

//test route
router.get('/', function(req,res) {
  res.json({ message: 'API is working!' });
});

//Register Route
//set prefix of route
app.use('/api', router);

//=================================
//Start server
//=================================
app.listen(port);
console.log('Express is now listening on ' + port);

//=================================
//Base Setup
//=================================
var mongoose = require('mongoose');
var env      = require('./environment');

//connect to database
mongoose.connect('mongodb://localhost/' + env.SAFE_TITLE);

//test model
var Hero = require('./models/hero');










