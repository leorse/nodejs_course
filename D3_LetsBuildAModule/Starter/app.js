var greet = require("./greet.js");
greet();

var obj = 
{
    name:"Pouet",
    adresse:
    {
        rue:"23 rue du truc",
        cp: 59000
    },
    greet: function() {
        console.log('coucou');
    }
}

console.log(obj);
obj.greet();
obj['greet']();