var fs = require('fs');

var greet = fs.readFileSync(__dirname+"/"+"greet.txt", "utf8");

console.log(greet.toString());

var greet2 = fs.readFile(__dirname+"/"+"greet.txt", "utf8",
function (err, data){
    if(err == null)
    {
            console.log("ma data:"+data);
    }
        else
            {
                console.log(err.code);
            }
});
console.log('Fin');