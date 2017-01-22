var _ = require('lodash');

var localEnvVars = {
  TITLE:        'dota_hero_search',
  SAFE_TITLE:   'dota_hero_search',
  topSecret:    'mushu'
};

module.exports = _.extend(process.env, localEnvVars);
