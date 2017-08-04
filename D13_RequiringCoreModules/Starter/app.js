var util = require('util');

var debuglog = util.debuglog('POI');

debuglog('Alerte debug');

var name = 'toto';
util.log(util.format('Hello: %s', name));