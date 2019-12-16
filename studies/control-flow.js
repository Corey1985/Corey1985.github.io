/**
* Control – Flow:
*
*-//Descriptions//-
*
*0. The control flow is the order in which the computer runs statements in the program. Code is run in order from the first line in the code to the 
*last line (top down and left to right per line) unless the computer runs across structures that change what is accessed, such as conditionals, functions 
*and loops. 
*
*1. “If” is used at the begining of an "IF" statement to specify a block of code to be run. If the specified condition evaluates to true it is run. 
*Otherwise the condition is evaluated to false, not run, and continues to the next statement.
*
*2. “Else if” specifies the next condition to test (if the previous statement was not run). It is used after "IF" but before "Else". With the assumption 
*that the statement is true it is run, if false it is not run. 
*
*3. “Else” is used at the end of a block of code to be executed, if the previous conditions were false and all of the previous statements were not run.
*It does not require a conditional to evaluate, only a block of code in curly braces {} to run.
*
*4. “Switch” is used to specify many alternative blocks of code to be executed. The switch expression is evaluated once. The value of the expression
*is compared with the values of each case. If there is a match, the associated block of code is executed.
*/

//Examples//
//0. If-else if-else Statement in a function //
  // Using the below function as an example
function time(hour) {
  if (hour < 6){            	
  /*
  *if true thsi code block is run 
  */
  	meal = "Breakfast";		
  } else if (hour < 12){     	
  /*
  *if true thsi code block is run 
  */
	meal = "Lunch";
  } else if (hour < 20){        
  /*
  *if true thsi code block is run 
  */ 
	meal = "Dinner";
  }
    else {                
  /*
  *if the previous statements (if - else if) were not run this is the default to run 
  */ 
  	meal = "Cookies";
  }
  return meal 		  
  /*
  *returns the code that evaluates to true
  */
};

//1. If statement //
  console.log(time(5));	  //prints => Breakfast
  /*
  *This calls time with the argument of 5 to print the appropriate result
  */

//2. Else if //
  console.log(time(10));  //prints => Lunch 
  /*
  *This calls time with the argument of 10 to print the appropriate result
  */
  console.log(time(19));  //prints => Dinner
  /*
  *This calls time with the argument of 19 to print the appropriate result
  */ 

//3. Else //  
  console.log(time());    //prints => Cookies 
  /*
  *This calls time with no argument to print the appropriate result
  */


//4. Switch //	
var games = ["Ark", "Halo", "Minecraft", "Fallout 76"];  
switch (Math.floor(Math.random() * games.length)) {   
  /*
  *the evaluation after switch cooses a random index in the color array
  */
  case 0:
    console.log("Complicated");        
  /*
  *prints if the zero index of games is chozen
  */
    break;
  case 1:
    console.log("lan party Time");     
  /*
  *prints if the one index of games is chozen
  */ 
    break;
  case 2:
    console.log("Relaxing");           
  /*
  *prints if the second index of games is chozen
  */
    break;
  default:                       
    console.log("trash...");           
  /*
  *since the index of Orange is 3 and there is no case for it then the default is chozen
  */
    break;
}
