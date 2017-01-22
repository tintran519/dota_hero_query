var express     = require('express');
var app         = express(); // defines app using express
var bodyParser  = require('body-parser');
//test model
var Hero = require('./models/hero');

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

//middleware to use for all requests
router.use(function(req, res, next) {
  //do logging
  console.log('middleware here');
  //go to next routes and don't stop here
  next();
});

//test route
router.get('/', function(req,res) {
  res.json({ message: 'API is working!' });
});

//routes with /bears
router.route('/heroes')

  //create a hero(POST http://localhost:8080/api/heroes)
  .post(function(req, res) {

    var hero = new Hero();
    hero.name = req.body.name;

    //save hero
    hero.save(function(err) {
      if(err)
        res.send(err);

      res.json({ message: 'Hero created!' })
    });

  })

    //get all heroes(GET http://localhost:8080/api/heroes)
    .get(function(req, res) {
      Hero.find(function(err, heroList) {
          if(err)
            res.send(err);

          res.json(heroList);
      });
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
require('net').connect(27017, 'localhost').on('error', function() {
  console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
  process.exit(0);
});
mongoose.connect('mongodb://localhost/' + env.SAFE_TITLE);












