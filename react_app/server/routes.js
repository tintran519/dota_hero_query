var express = require('express');
    router  = new express.Router();

//require controllers
var heroController     = require('./controllers/heroes');
var dotaHeroController = require('./controllers/dota_hero');

router.get('/heroes', heroController.index);

router.get('/dotahero', dotaHeroController.getHero);

module.exports = router
