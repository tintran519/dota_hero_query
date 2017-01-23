var request = require('request');
const rootURL = 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=2030BD9A4D750E34D2B87995FE862930&language=en_us&format=JSON'

function getHero (req, res) {
  var options = {
    url: rootURL
  };
  request(options, function(err,response,body){
    res.json(JSON.parse(body))
    if(err) {
      res.send(err);
    }
  });
}

module.exports = {
  getHero: getHero
}
