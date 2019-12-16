/**
*String - Manipulation
*
*0. Strings can be manipulated using operators or string methods. Operators can add to the string as needed. Methods may find the strings length,
*the index of a character or do any number of other things.
*
*1. An example of a string operator is the concatenation operator ”+”. This joins two or more string values together in conjunction with the assignment 
*operator "=". The shorthand of this "+=" could also be used.
*
*2. String methods can manipulate stings in more complex ways than operators. When a string is created its variable becomes a string object instance, 
*and (as a result) has a large number of properties and methods available to it. The length() property finds the length of the string as numbers dependent on
the length of the string. When you know where a substring starts inside a string, and you know at which character you want it to end, slice() can be 
*used to extract it. The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower or uppercase, respectively. 
*This can be useful for example if you want to normalize all strings to strictly compare their characters. You can replace one substring inside a string 
*with another substring using the replace() method. 
*
*/

//Examples//
//1.	Operators // 
var name = "Corey" + " " + "line";
 /*
 *Combines First with a n empty string then adds line at the end
 */
 console.log(name);    // prints => Corey line
 console.log(lastName); // prints => undefined 
 /*
 *undefined is printed because it is above the the variable it calls
 */
var lastName = "Second"; 
 console.log(lastName); // prints => Second
lastName = "Acosta";
 console.log(lastName); // prints => Acosta

//2.	String Methods //
var replace = name.replace(/line/gi, lastName);
/*
*
*/
 console.log(replace);// prints => Corey Acosta
 console.log(replace.length); // prints => 12
/*
*The length method finds the numerical length of the string.
*/
 console.log(replace.indexOf("t")); // prints => 10
/*
*The indexOf() method finds the index of the letter t.
*/
 console.log(replace.slice(0,7)); // prints => Corey A
/*
*The slice() method selects the string starting at the 0 index ending at its 7th index
*/
 console.log(replace.slice(5)); // prints => " Acosta" (Acosta with a space in front)
/*
*The slice() method selects the string starting at the 5 index ending at its last index
*/
 console.log(replace.toLowerCase()); // prints => corey acosta
/*
*The toLowerCase() method converts the string  all to lower case
*/
 console.log(replace.toUpperCase()); // prints => COREY ACOSTA
/*
*The toUpperCase() method converts the string  all to upper case
*/