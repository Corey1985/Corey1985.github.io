/**
*	Functions
*-//Descriptions//-
*
* 0. Functions are reusable blocks of code that accept arguments, process those arguments, and returns the new data value. There are four parts to a 
*function declaration:  name, parameter(s), function body (where the code runs), and return statement.  
*
* 1. Functions may OPTIONALLY take parameters and/or arguments.  Parameters are placeholders for arguments (which are listed inside closed parentheses 
*after the functions' name)that are later PASSED or given to the function at call time. Functions have a return statement that will give value to a function call. 
*Console.log() may also be used but it only prints what may be returned, it has no actual value. Return statements can be used ONLY in a function body.
*Javascript lets you call functions omitting some parameters, filling in the other parameters with the value undefined.
*
* 2. Functions can be called with its name followed by parentheses containing the optional arguments. Calling a function runs the code in the function body. 
*A closure is the combination of a function bundled together (enclosed) with references to its parent scope. In other words, a closure gives you access to an 
*outer function’s scope from an inner function.
*
* 3. Scope determines the accessibility (visibility) of variables within a program. Variables defined inside a function are not accessible from outside the function. 
*JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures. Global variables can be used 
*(and posibly changed) by all scripts in the code. A local variable can only be used inside the function where it is defined. It is hidden from other functions and
*other scripting code. Global and local variables with the same name are different variables. Modifying one, does not modify the other.
*
* 4. Functions may be assigned to a variable. Under most circumstances this is not reccomended as it is more wordy than it needs to be. They are also not hoisted to
*the top of the scope as a function declaration would be. It is usually a better practice to describe a function with the function keyword than a variable. 
*
* 5. Arrow functions are anonymous functions that accept a fixed number of arguments. These types of functions operate in the the function or other code where they 
*are defined. Arrow functions are created using =>.
*
*/

//Examples//

//0. Function format//
	function name1(parameter1,  parameter2){ 
			function body(){};  
			function body(){};  
			return parameter1 + parameter2; 
			}
  /*
  *The current inner functions do not run as they are empty and have no return statements within them.
  *This is so in order to show that 
  *The return statement returns the 2 arguments concatenated as 'argument1argument2'
  */
	name1("argument1", "argument2");

  function area(length, width) {
 		 return length * width;
		}
  /*
  * Function returns the value of a and b
  */

var size = area(2, 4);
  /*
  *Function “area” is called, return value will end up in size.
  */
	console.log(size);	// prints => 8
  /*
  *Prints the value of size which is calculated using the called function with the given values
  */
  
//1. Optional Parameters & Arguments//
	function name2(param1, param2, ...params){             		
			return param1 + "/" +  param2 + "/" + params; 
			}
	console.log(name2("argument1", "argument2", "argument3", "argument4")); 		
  /*
  *The ...params PARAMETER is called a spread operator.The last 2 arguments from the call in the console.log() are passed to the ...params PARAMETER.
  *If the spread operator was not present the 2 arguments would no be accepted into the finction and would be printed as undefined.
  */

//2. Calling & Closure //
	console.log(area(0, 2));  //prints => 0 
  	area(10, 12); 	
  /*
  *calls the function named area with the arguments (4, 3) in their respective places; length as 10 and width as 12.
  */
    	function mph(distance, time) {  
        	return distance / time + " mph"; 	
    	}
    	console.log(mph(50,10)); // prints => 5 mph (as a string)

//3. Scope //
	function scopeFunc() {
 			  global = 4;
 			 return global * global;
			 }			
    console.log(scopeFunc()); //prints => 16
    console.log(global);      //prints => 4
  /*
  *The "global" variable inside the function is accessible outside of the function because the variable was not locally initilized and was assumed to be global 
  *(and thereby accessible by outer parent scopes) by the interpreter.
  */

  var d = 5;
		function scopeFunc2() {
  		return d * d;
		}				
    console.log(scopeFunc2());//prints => 25
  /*
   *A function can also access variables defined outside of itself unless it was initiated in a lower (non global, inside of a different loop or function) scope 
   *using the let or const key word.
   */
  function scopeFunc3(bobbity){
    let bibbity = "Boo";
    return bibbity + bobbity; 
  } 
  /*
  *The scopeFunc3 is able to access the variable bibbity as the return statement is on a lower line of code.
  */
   console.log(scopeFunc3(" Who?")); // prints => Boo Who?
    

//4. Function Expression//
    var surfaceArea = function(width, height) {
        return width * height;
    };
    console.log(surfaceArea(10,6));// prints => 60

//5. Arrow Function//
    const mess = ["tiMe", "iS", "ReLATive"];
    const yellIt = mess.map(word => word.toUpperCase());
    console.log(yellIt); // prints => ['TIME', 'IS', 'RELATIVE']
