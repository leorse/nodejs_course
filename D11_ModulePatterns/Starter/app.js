var greet = require('./greet1');
greet();
//on importe directement la propriété que l'on souhaite
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello world!';

//require sur un fichier déjà importé ne change rien
//c'est déjà en cache
var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
objGreet4 = new Greet4();
objGreet4.greet();

var greet5 = require('./greet5');
greet5.greet();