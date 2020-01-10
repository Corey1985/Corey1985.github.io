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
      let i = 0;
			while (i <= 150) {	 
  			console.log(i + " bottles of beer on the wall!");  
  			i+=20;			   
			}                   
/*”i” is the starting point, “<=” evaluates if i is less than or equal to 150 at which point it stops iterating. The console.log() in curly braces is the code 
*that is run each iteration and prints the value of the string i (as a number) concatenated to "bottles of beer on the wall!" On the next line is the incremnter which 
*determines what the value is to be incremented by. In this case it is 20.
*/

	//Assuming: 
      let minute = 60;
   			   while (minute >= 0) {		
			   console.log(minute + " seconds");
			   minute -= 10;                   
   			   }
/*
*”minute” is the starting point, “>=” evaluates if minute is greater than or equal to 60, and 0 is the value of the stopping point. The console.log() in curly braces is 
*the code that runs during each iteration and prints the value of the value of minute per decrement concatenated to " seconds". On the next line is the decrementer 
*which determines what the value is to be decremented by per iteration. In this case it is 10.
*/            
                            

//2. For //
	var localCities = ['Chalmette', 'Slidell', 'Meraux', 'New Orleans', 'Kenner'];
  /*
  *An array with the variable localCities.
  */
		for (let a = 0; a < localCities.length; a++) {	
 			 console.log("a " + localCities[a]);		
			}						
  /*
  *for loop starting at zero index, iterating till it reaches the length of localCities.array, and incrementing by 1 each time.
  */	
			for (let b = localCities.length - 1; b >= 0; b-=2) {		
 			 console.log(localCities[b] + " b");				
			}	
  /*
  *for loop starting at the last index, iterating till it reaches the zero index of localCities array, and decremementing by 2 each time.
  */								
      				


//3. For / in //
	var mountain = {name:"Mount Everest", height:"29,035 ft", location: "Himalayas"};	
  /*
  *An object with key & value pairs
  */
	var valuesOnly = [];						    		
  /*
  *Where mountain value is placed per iteration.
  */												
		for (let c in mountain) {							
		 valuesOnly.push(mountain[c]);
			}
  console.log(valuesOnly);  // [ 'Mount Everest', '29,035 ft', 'Himalayas' ]                         
  /*
  *Each value is pushed into valuesOnly
  */      


	let aString = "";	
  /*
  *Where each iteration of the loop will be placed.
  */								
		for(let y in mountain) {							
			console.log(aString += mountain + " ");		
			}                                       
  /*
  *Each iteration is added to aString then printed as below. Since y is not in brackets after the named object (mountain), only objects will be printed.
  *[Object Object] 
  *[Object Object] [Object Object]
  *[Object Object] [Object Object] [Object Object]
  */