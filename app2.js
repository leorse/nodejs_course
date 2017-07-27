function greet()
{
    console.log("coucou");
}

greet();

//functions are first-class
function logGreeting(fn)
{
    fn();
}
logGreeting(greet);
//function expression
var greetMe = function()
{
    console.log("coucou2");
}
greetMe();
//it's first class
logGreeting(greetMe);
//use a function expression on the fly
logGreeting(function()
    {
        console.log('coucou3');
        
    }
);