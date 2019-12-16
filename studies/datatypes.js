/**
* Datatypes:
*
*-//descriptions//-
*
* 0. JavaScript variables can hold many types of data, which can be Numbers, NaN, infinity/-infinity, Strings, Booleans, Arrays, Objects, functions, 
*Undefined, and Null. Also JavaScript indexes some variables (such as strings and arrays) starting at zero(0).
* 
* 1. Numbers are any numerical value. These values can be used in arithmetic expressions to create new values. The number type represents either
*integer or floating point numbers. There are many operations for numbers, i.e. multiplication *, division /, addition +, subtraction -, and so on. 
*Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: NaN, Infinity, and -Infinity. 
*
* 2. NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation. NaN is sticky. Any further 
*operation on NaN returns NaN.
*
* 3. Infinity or -Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
*
* 4. Strings are a collection of characters and/or symbols surrounded by quotes ('single' or "double" quotation marks).
* We can access individual characters in a string with bracket notation and in some instances dot notation.
*
* 5. Booleans have a true or false value. They are sort of like on/off switches which are typically used in conditional statements. 
*They can be created with a Boolean expression using comparison operators.
*
* 6. An Array literal “[]” is a complex data type that is used to store multiple different data types in large amounts. Arrays start at the 
*zero index on the first value, 1 on the second, 2 on the third, etc... . Arrays can contain references to any other data type which includes 
*strings, numbers, Booleans, other arrays, objects, and even functions. Each value is separated by an ','. Arrays can be accessed 
*using array methods such as push(), pop(), shift(), or unshift(). 
*
* 7. Objects are similar to arrays but instead of an indexed value the values are stored in a 'key: value' pair. Like arrays, objects are complex 
*a datatype. Like arrays objects can store multiple datatypes. Unlike arrays, Objects do not have a length property. Arrays can be contained in 
*objects along with simple data types like strings, numbers, & Booleans.  
*
* 8. Undefined is a special value that makes its own type. The meaning of undefined is “value is not assigned”. If a variable is declared, but 
*not assigned, then its value is undefined.
*
* 9. Null is just a special value which represents “nothing” or “empty”. Null expresses the lack of identification. It is a primative value and
*is treated as falsy for boolean operations.
*
* 10. A functions is a reusable block of code designed to perform a particular task when it is activated. It is executed when "something" invokes it 
*(calls it). A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). Function names can contain 
*letters, digits, underscores, and dollar signs (same rules as variables). The parentheses may include parameter names separated by commas:
*(parameter1, parameter2, ...). The code to be executed, by the function, is placed inside curly brackets: {}
*
* 11. Simple/primitive data types are data that is not an object and has no methods. If a primitive type is assigned to a variable, we can think of 
*that variable as containing the primitive value. There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol. 
*All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. 
*The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. 
*A complex data type takes other data types and combines or alters a copy by referring to another variable. 
*
*/

//Examples//-
//1. Numbers//
var integer = 4985;
 /*
 *The value of the variable interger is a whole number 
 */
var floatingPoint  = 49.38; 
 /*
 *The value of the variable floatingPoint has a decimal point which denotes a floating point number
 */
var arithmetic = 10 + 5; 
 /*
 *The value of the variable arithmetic is an arithmetic expression.
 */

//2.NaN//
 console.log( "not a number" / 2 ); // prints => NaN
 /*
 *NaN is created as arithmetic other than addition with a string creates NaN
 */ 

//3. Infinity or –Infinity//
 console.log(1/0); // prints => Infinity
 /*
 *Infinity created by dividing 1 by 0
 */
 console.log(-Infinity); // prints => -Infinity
 /*
 *Or just reference Infinity directly
 */

//4. Strings//
var str = "My name is...";  
 /*
 *This is an variable initialized with a string. 
 */
 console.log(str);      // prints => My name is...
 console.log(str[4]);   // prints => a
 console.log(str[6]);   // prints => e
 console.log(str.length -1);     // prints => 12
 console.log(str[str.length -1]);// prints => .


//5. Booleans//
var boolCheck1 = true === 20;
 /*
 *Evaluates to false because false is not strictly equal to 20.
 */
 console.log(boolCheck1); //prints => false 
var boolCheck2 = "a" < "b";
 console.log(boolCheck2); //prints => true
 /*
 *Evaluates to true because string of a is less than string of b in the alphabet.
 */

//6. Array//
[]; 
 /*
 *Above is an empty array literal
 */
var person = ["Corey", 33, true];
 console.log(person.length); //prints => 3
 /*
 *using console.log and using .length with the variable name in front gives
 *the length property of a string or in this case an array.
 */
 console.log(person[2]);		 //prints => true 
 /*
 *A value in an array may be accessed by writing the name of the variable it is assigned to then putting the index of the value inside 2 square brackets
 */

//7. Object//
{} 
 /*
 *Above is an empty object literal
 */
var people = {person: ["Corey", 33, true]};
 console.log(people.person[0]);// prints => Corey 
 /*
 *Accesses the variable the key and first index of the people array 
 */

//8. Undefined//
var empty;
 console.log(empty);//prints => undefined 
 /*
 *Because the value was not defined its value is undefined
 */

//9. Null//
let space = null;
 console.log(space);  //prints => null 
 /*
 *Is an empty value that does not exist.
 */

//10.Function//

function multiply(a, b) {
  console.log( a * b);      // 
}
 /*
 *The function declaration prints the product of a and b when called
 */
multiply(5, 9);   
 /*
 *Calls the finction with the 2 arguments of 5 & 9
 */

//11. Simple and Complex Data Types//
var simp1 = 10;
 /*
 *Is a primitive datatype which can be copied by value
 */
  console.log(simp1);//prints => 10
var simp2 = 'abc';
 /*
 *Is a primitive datatype which can be copied by value
 */
  console.log(simp2);  //prints => abc 
var ref1 = simp2;
 /*
 *Is a complex datatype as it is referring to the value in the  "n" variable
 */
  console.log(ref1);//prints => abc
var ref2 = simp2;
 /*
 *Is a complex datatype as it is referring to the value in the previous "f" variable
 */
  console.log(simp1);//prints => 10