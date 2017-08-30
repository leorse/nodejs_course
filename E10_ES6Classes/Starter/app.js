'use strict';
//sue string permet d'être plus string dans la syntaxe et d'empêcher 
//JS de valider certaines façon de faire:
//par ex:
//a=3; n'est pas autorisé car on ne peut pas utiliser une variable sans la déclarer avant
//snas use string, on pourrait le faire
class Person {
	constructor(firstname, lastname)
	{
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() 
	{
		console.log('Hello, '+this.firstname + ' ' + this.lastname);
	}
}



var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
