var greeting = require('./greetings.json');

var greet = function() {
	console.log(greeting.es);
}

module.exports = greet;