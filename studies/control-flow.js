/**
* Control – Flow:
*
*-//Descriptions//-
*
*0. Control Flow may be thought of as decisions to be run as certain conditions are met. These decisions are determined starting from top left and ending
* at bottom right. Some structures such as conditionals, funcions, and loops may access or change earlier parts of the code.
*
*1. "If" is used at he begining of an if-else if-else statement; which is usually inside of a function. If the expression inside of the parentheses is true
*then its associated code block is run. Though if the expression is false the code will continue onto the next expression in the chain.
*
*2. “Else if” is similar to "If" with the difference being that it is used in the middle of a chain and the amount of them could range from 0 to an almost 
*unlimited amount. It is used after "IF" but before "Else". Assuming the statement is true it is run, if false it is not run. 
*
*3. “Else” is used at the end of the chained statement as a default. If all previous statements are false this will be run. It does not use a conditional
*to evaluate, only a block of code to be run in curly braces {}.
*
*4. "Switch" can be used to determine blocks of code to be run in a similar way to an "if-else if-else" statement. The value of an expression is coompared
*with the values of each case. If the case mathches is true, the code before break is run. If all are false the code associated with "default" is run.
*
*/

//Examples//
//0. If-else if-else Statement in a function //
  // Using the below function as an example
function time(hour) {
  let meal = null;
  if (hour < 6){            	
  /*
  *if true this code block is run 
  */
  	meal = "Breakfast";		
  } else if (hour < 12){     	
  /*
  *if true this code block is run 
  */
	  meal = "Lunch";
  } else if (hour < 20){        
 /*
  *if true this code block is run 
  */ 
	  meal = "Dinner";
  }
    else {                
  /*
  *if the previous statements (if - else if) were not run this is the default to run 
  */ 
  	meal = "Cookies";
  }
  return meal; 		  
  /*
  *returns the code that evaluates to true
  */
}

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
