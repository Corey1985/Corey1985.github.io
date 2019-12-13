/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables are named identifiers that can point to values of a particular 
* type, like a Number, String, Boolean, Array, Object or another data-type.  Variables are called so because once created, we can CHANGE the value (and type of value)
* to which they point.
*
* 1. To create a variable we use the keyword (var, let or const) followed by a name (id or alias) for our variable. 
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
* 
* 3. Variables that are declared with var or let may be reassigned. Variables declared with const can not be reassigned.
*/

// 1. declaration //
var firstName;

/*
*At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything.
*/
console.log(firstName); // prints => undefined

// 2. initialization or assignment //
firstName = 'Tim';     // myname is assigned to "Tim"
console.log(firstName); // prints => Tim
var lastName = "Marley";// lastName is initilized to the value of "Marley"

// 3. re-assignment //
firstName = 'Bob';
console.log(firstName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
console.log(myVariable); // prints 1
var myVariable = true;
console.log(myVariable); // prints true
myVariable = "someString";
console.log(myVariable); // prints "someString"

// 4. Hoisting //