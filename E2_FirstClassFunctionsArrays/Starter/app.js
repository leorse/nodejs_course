var obj = 
{
    greet:'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays
var arr = [];

arr.push(function() {
    console.log('coucou');
});

arr.push(function() {
    console.log('coucou2');
});

arr.push(function() {
    console.log('coucou3');
});
arr.forEach(function(item, index, tbl) {
    console.log(tbl);
    item();
});