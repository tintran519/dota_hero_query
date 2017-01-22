var express = require('express');
    router  = new express.Router();

//require controllers
var heroController  = require('./controllers/heroes');

router.get('/heroes', heroController.index);

module.exports = router
