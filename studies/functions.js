/**
*	Functions
*-//Descriptions//-
*
* 0. Functions are a way of shortening code as they are able to be used over and over again. They accept (optional) arguments, process the arguments as intended, 
*then return a value. There are four parts to creating a function. Each type of function has a keyword or symbol describing it as a function, optional parameters,
*a body where the code runs, and usually a return statement.
*
* 1. Functions may OPTIONALLY take parameters and/or arguments.  Parameters are placeholders for arguments (which are listed inside closed parentheses 
*after the functions' name)that are later PASSED or given to the function at call time. Functions have a return statement that will give value to a function call. 
*Console.log() may also be used but it only prints what may be returned, it has no actual value. Return statements can be used ONLY in a function body.
*Javascript lets you call functions omitting some parameters, filling in the other parameters with the value undefined.
*
* 2. Funcions are activated by calling them using its name followed by parentheses which enclose any arguments that need to be passed to them. A closure is one or more 
*functions within another function that access a variable within its parent scope. In other words the nested function (within the parent function) is able to access 
*the outer scoped variable that outer (non global) scope.
*
* 3. Scope is where a variable or function is visible (or accessible) within the code. Variables are either global or local scoped. When a variable inside a function is 
*initilized it is not accessible from the global scope. Global variables may be accessed or changed by all scripts in code (with the exception of const declared variables).
*A local variable may only be accessed within the function it was defined. It is invisible to outer scoped variables and functions. Modifting a local scoped variable
*does not modify a globaly scoped variable.
*
* 4. Function expressions may be assigned to a variable. Not only is this not generally recomended, it takes more time to write, and it is not hoisted like a declaration.
*They are not hoisted to the top of the global scope as a function declaration would be. Generally it is better to use the function keword and declare it than it is to assign 
*it to a variable.
*
* 5. Arrow functions were introduced in ES6. They operate within another function or are assigned to a variable. They are distinguishable by => after parentheses and before
*curly braces {}. Arrow functions do not need parentheses (), curly braces{}, or a return if they only have one argument and are on one line.
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

