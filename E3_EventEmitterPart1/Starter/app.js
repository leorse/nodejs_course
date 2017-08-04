//en utilisant les emetteurs de NodeJS, pas besoin de ce require
//var Emitter = require('./emitter');
var Emitter = require('events');
var eventConfig = require('./config').events;

var emit = new Emitter();

emit.on(eventConfig.GREET, coucou1);
emit.on(eventConfig.GREET, coucou2);
emit.on(eventConfig.GREET, coucou3);
emit.on(eventConfig.GREET, function(){
    console.log('Coucou 4');
});

function coucou1()
{
    console.log('coucou1');
}

function coucou2()
{
    console.log('coucou2');
}

function coucou3()
{
    console.log('coucou3');
}

emit.emit(eventConfig.GREET);