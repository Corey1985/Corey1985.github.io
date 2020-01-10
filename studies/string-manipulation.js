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
*and (as a result) has a large number of properties and methods available to it. When you know where a substring starts inside a string, and you know at 
*which character you want it to end, slice() or substring() can be used to extract it. The string methods toLowerCase() and toUpperCase() take a string 
*and convert all the characters to lower or uppercase, respectively. This can be useful for example if you want to normalize all strings to strictly 
*compare their characters. You can replace one substring inside a string with another substring using the replace() method. 
*
*/

//Examples//
//1.	Operators // 
var name = "Corey" + " " + "LINE";
name += " LiNe";
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
 console.log(lastName.length); // prints => 6
  /*
  *The length property can be used to find the numerical length of the string.
  */

//2.	String Methods //
var tweak = name.replace(/line/gi, lastName);
  /* 
  *The replace() method replaces a value in a string and creates a new string. The value to be
  *replaced is line but since the original value is uppercase and the value to be searched for is lowercase
  *the regEx expression //gi is used. // creates the regEx and gi describes global insensitive.
  */
 console.log(tweak);// prints => Corey Acosta Acosta
 console.log(tweak.indexOf("t")); // prints => 10
  /*
  *The indexOf() method finds the index of the letter t in the variable attached to replace.
  */
 console.log(tweak.slice(0,7)); // prints => Corey A
  /*
  *The slice() method selects the string starting at the 0 index ending at its 7th index
  */
 console.log(tweak.substring(0, 12)); // prints => " Acosta" (Acosta with a space in front)
  /*
  *The substring() method selects the string starting at the 5 index ending at its last index
  */
 console.log(tweak.toLowerCase()); // prints => corey acosta
  /*
  *The toLowerCase() method converts the string  all to lower case
  */
 console.log(tweak.toUpperCase()); // prints => COREY ACOSTA
  /*
  *The toUpperCase() method converts the string  all to upper case
  */
 console.log(tweak.split(" "));   // prints => ['Corey', 'Acosta', 'Acosta']
 console.log(tweak.split(""));    // prints => ['C','o','r','e','y',' ','A','c','o','s','t','a',' ','A','c','o','s','t','a']
  /*
  *The method split() creates an array from a string based off the string character passed to it
  */