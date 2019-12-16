/**
*
* Loops:
*
* 0. Loops can execute a block of code a number of times until a condition is reached or an infinite loop is created (in which case the program will eventually crash). 
*Infinite loops should never be included in your program.
*
* 1. “While” loops iterate through a block of code while a specified condition is true. Generally considered depreciated as it can more easily have an infinite loop.
*To create a while loop you need a starting variable declared outside of the loop. Then use the keyword while, open parentheses and run condition closed in by parentheses.
*Next is open curly braces followed by the code that will be run per iteration, followed by the incrementer on the next line and finally closed in by curly braces.
*
* 2. “For” loops iterate through a block of code untill the stop condition becomes true. This is used to iterate through an array or string. To make a for loop you need 
*to use the key word "for" followed by open parentheses, initilize a starting variable, semicolon, the stoping condition, then the incrementer closed in by parentheses. 
*Next is open curly braces that contains the code that will be run followed by closing curly braces.  
*
* 3. “For-in” loops iterate through the properties of an object. To make a for-in loop you need to use the key word "for" followed by open parentheses, a starting 
*variable, the key word in and the name of the object to iterate through followed by closing parentheses. Next is open curly braces followed by the code to be run, 
*semicolon, and finally the closing curly braces.
*/

//Examples//
//1. While //
	//Assuming: 
var i = 0;
	while (i <= 15) {	 
  		console.log("The number is " + i + " while forward");  
  		i+=5;			   
		}                   
  /*”i” is the starting point, “<=” evaluates if i is less than or equal to 15, and 15 is the value of the stopping point. The console.log() in curly braces is the code 
  *that runs each iteration and prints the value of the string "The number is " concatenated to the incremented value concatenated to "while foward. 
  *On the next line is the incremnter which determines what *the value is to be incremented by. In this case it is 5.
  */

	//Assuming: 
var y = 20;
   	while (y >= 0) {		
	   console.log("The number is " + y + " while backward ");
	   y-=6;                   
	   }
  /*
  *”i” is the starting point, “>=” evaluates if i is greater than or equal to 10, and 10 is also the value of the stopping point. The console.log() in curly braces is 
  *the code that runs during each iteration and prints the value of the string "The number is " concatenated to the decremented value concatenated to " while backward ". 
  *On the next line is the decrementer which determines what the value is to be decremented by. In this case it is 3.
  */            
                            

//2. For //
var cars = ['BMW', 'Volvo', 'Mini'];
  /*
  *An array with the variable cars1.
  */
	for (i = 0; i < cars.length; i++) {	
 		console.log(cars[i]);		
		}						
  /*
  *for loop starting at zero index, iterating till it reaches the length of cars array, and incrementing by 1 each time
  */	
	for (i = cars.length -1; i >= 0; i--) {		
		console.log(cars[i]);				
		}	
  /*
  *for loop starting at the last index, iterating till it reaches the zero index of cars array, and decremementing by 1 each time
  */								
      				
//3. For / in //
var person = {firstName:"Tim", lastName:"Tam", age:75};	
  /*
  *An object with key & value pairs
  */
var print1 = "";						    		
  /*
  *Where our value is placed per iteration.
  */												
	for (let x in person) {							
	console.log(print1 += person[x] + " ");
	}                           
  /*
  *Each iteration is added to text1 then printed as below.
  *Tim 
  *Tim Tam 
  *Tim Tam 75 
  */      


let print2 = "";	
  /*
  *Where each iteration of the loop will be placed.
  */								
	for(let y in person) {							
		console.log(print2 += person + " ");		
		}                                       
  /*
  *Each iteration is added to text2 then printed as below. Since y is not in brackets after the named object, only objects will be printed
  *[Object Object] 
  *[Object Object] [Object Object]
  *[Object Object] [Object Object] [Object Object]
  */