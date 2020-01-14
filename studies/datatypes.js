/**
* Datatypes:
*
*-//descriptions//-
*
* 0. JavaScript variables can hold many types of data, which can be Numbers, NaN, infinity/-infinity, Strings, Booleans, Arrays, Objects, functions, 
*Undefined, and Null. Also JavaScript indexes some variables (such as strings and arrays) starting at zero(0).
* 
* 1. Numbers are any negative or positive numerical value. These values can be used in arithmetic expressions to create different values. There are many
*operations for numbers; ranging from subtraction (-) to addition(+), multiplication (*), division(/), and others. 
*Other than regular numbers, there are values called “special numeric values” which also belong to this data type: NaN, Infinity, and -Infinity. 
*
* 2. NaN is a computational error. It happens when an incorrect or an undefined mathematical operation is run. Excluding reassignment, NaN is sticky. 
*Any other operation on NaN returns NaN.
*
* 3. Infinity or -Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than or less than any number. As an immeasurable 
*number, javaScript cannot define it beyond its named value.
*
* 4. Strings are characters and/or symbols surrounded by 'single' or "double" quotation marks. Individual characters in a string can be accessed with bracket 
*notation. The length may be accessed using .length.
*
* 5. Booleans are a true or false value. They are sort of like on/off switches and are typically used in conditional statements or returns. 
*They can be created with a Boolean expression using comparison operators.
*
* 6. One of a few complex data types is an array ([]). These are used to store any amount of any kind of data type in an indexed list, starting at 0.
*These data types include strings, numbers, Booleans, other arrays, objects, and even functions. Each indexed value is separated by a comma (,). 
*Arrays can be accessed or altered using array methods such as push(), pop(), shift(), or unshift() or bracket notation. 
*
* 7. Another form of complex data type is an object ({}). The difference between an array and object is that an array is an organized indexed list and
*an object has key/value pairs. The key is always a string but the value may be any data type. Objects may be accessed using bracket ([]) or dot notation (.). 
*
* 8. Undefined is a special value that makes its own type and value. The meaning of undefined is “value is not assigned”. If a variable is declared, but 
*not assigned, then its value is undefined. This may also happen if a value is deleted or remobed from where it is expeced to be.
*
* 9. Null is another type of special value. It represents nothing or empty. It represents the lack of identification. Not only is it a primitive value it
*is also considered a falsy boolean value.
*
* 10. A function is a block of code designed to perform the same action when called. It is only active if it is called by its name. A javaScript function 
*is a reusable block of code which (as a declaration) has the keyword function, followed by a lowerCase name. After the name, parentheses () with optional 
*parameters inside of them are placed. These parameters are placeholders for arguments that may be in the function call. Next comes curly braces {} with 
*the block of code to be run.
*
* 11. Simple or primitive datatypes are immutable and not able to be altered. Unlike arrays an objects these datatypes only have one value and though simple datatypes 
*may be reassigned they are never changed. A complex datatype (such as an array, object or function) may either hold or refer to a simple datatype. The 7 simple datatypes
*include: string, number, bigint, boolean, null, undefined, and symbol.
*
*/

//Examples//-
//1. Numbers//
var integer = 4985;
 /*
 *The value of the variable interger is a whole number.
 */
var floatingPoint  = 49.38; 
 /*
 *The value of the variable floatingPoint has a decimal point which denotes a floating point number.
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
