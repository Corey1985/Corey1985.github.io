/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables are named identifiers that can point to values of 
*a particular type, like a Number, String, Boolean, Array, Object or another data-type.  Variables are called so because once created, we can CHANGE 
*the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword (var, let or const) followed an assignment operator and by a name (id or alias) for our variable. 
*The var declaration has a global or local scope and may be reassigned. In relation to scope it may be accesed outside of local scope which is why
*it is generally not recommended.The let keyword is block scoped and can be reassigned. Const like let is block scoped BUT unlike var cannot be reassigned.
*
* 2. There are 2 phases of using variables: declaration and assignment (or both together as initialization). First is declaring a variable using a keyword of
*var or let folowed by a space then a name and following that is a semicolon. Though you may assign a value to var or let later it is usually best to initilize 
*it all at once.  While you may assign var or let a value later you cannot do the same to const as it is a constant and cannot be changed. 
*To initilize a variable use a variable keyword, a space, name that you wish the variable to be called, another space, the equals sign, another space, then the
*value of the named variable followed by a semicolon.
* 
* 3. Variables that are declared with var or let may be reassigned. Variables declared with const can not be reassigned. While that const variable cannot be reassigned, 
*if it is initilized with a complex datatype (such as an array or object) that holds other datatypes it may be manipulated with their appropriate methods.
* 
* 4. Hoisting is the order in which javaScript interprets code. For instance function declarations are hoisted above variables in the global scope but since 
*function expressions are assigned to variables that may not be the case, especially so for let and const. It is good practice to use let or const when creating a variable
*as global variables or var declared variables may be accessed outside of it's scope unintentionally. Parents may not directly access child variables but children may 
*access the parent.
*/


// 1. declaration //
var firstName;
 /*
 *At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything.
 */
console.log(firstName); // prints => undefined
//let and const examples will be displayed below in the hoisting example

// 2. initialization or assignment //
firstName = 'Tim';      
 /*
 *firstName is assigned to "Tim"
 */
 console.log(firstName); // prints => Tim
var lastName = "Marley";
 /*
 *lastName is initilized to the value of "Marley"
 */
 console.log(lastName); // prints => Marley
const time = [];	
 /*
 *an empty array literal
 */
time.push(5)		
 /*
 *5 is added to the end of time array variable
 */
 console.log(time)	// prints => [5]
time.pop()		
 /*
 *removes last element in the time array
 */ 
 console.log(time)	// prints => []
//time = 3;   		//commented out to prevent a TypeError	
 /*
 *would create a TypeError as this would try to reassign a constant 
 */

// 3. re-assignment //
firstName = 'Bob';
 console.log(firstName); // prints => Bob

 /*
 *NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants 
 */
var fullName = 1;
 console.log(fullName); // prints => 1
var fullName = true;   //reassigns the value of fullName to true
 console.log(fullName); // prints => true
fullName = firstName + " " + lastName;
 /*
 *reassigns the value of fullName to use the value of firstName followed by a space then followed by the value of last name
 */
 console.log(fullName); // prints => Bob Marley

// 4. Hoisting //
 console.log(temp);                  // prints => nothing
 /*
 *nothing is printed as the var temp is hoisted but its value is not
 */
var temp = 75;
 console.log(temp);                  // prints => 75
for(let i = temp; i < 80; i++){     
  console.log(temp += 1);           // prints => each iteration starting at 76 ending at 80
}
// console.log(season);             // commented out to prevent Reference Error
 /*
 *A Reference Error would occur as const variables are not hoisted above the line they are declared on
 */
const season = [];
 console.log(season);                // prints => []
