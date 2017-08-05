var EventEmitter = require('events');
var util = require('util');

function  Obj()
{
    this.prop1 = "Paul";
}

Obj.prototype = {
    hello : function()
    {
        console.log("Hello "+this.prop1);
    },
    salut: function()
    {
        console.log("Salut "+this.prop1);
    }
}


var obj = new Obj();
obj.prop2 = "toto";
obj.salut = function() {
    console.log("Salut "+this.prop2);
}
obj.hello();
obj.salut();

var obj2 = new Obj();
obj2.hello();
obj2.salut();


var person  ={
    firstname:'',
    lastname:'Doe',
    greet:function() {
        return this.firstname+' '+this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname  = 'Doe\'s';

var jane = Object.create(person);
jane.firstname = 'Jane';

console.log(john.greet());
console.log(jane.greet());

var subJohn = Object.create(john);
subJohn.firstname = 'SubJohn';
console.log(subJohn.greet());

function Greetr() {
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function()
{
    console.log(this.greeting);
    this.emit('greet');
}

greet = new Greetr();
greet.on('greet', function() {
    console.log('on m\'a salué');
});

greet.greet();