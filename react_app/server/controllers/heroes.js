var Hero = require('../models/hero');

//get all heroes(GET http://localhost:8080/api/heroes)
var index = function(req, res) {
  Hero.find(function(err, heroList) {
      if(err)
        res.send(err);

      res.json(heroList);
  });
};

module.exports = {
  index:  index
};
