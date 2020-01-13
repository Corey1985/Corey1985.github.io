/**
*Operators:
*
*-//Descriptions//-
*
* 0. JavaScript operators are used in relation to values in order to assign, compare values, perform arithmetic operations, . These operators allow for a more 
*flexible and readable code. This flexibility allows for multiple ways of writing said code.
*
* 1. An assignment operator is a single equal sign =. The value on the left is assigned to the value on the right. This is generally first used when assigining 
*a variable to a value.
*
* 2. An arithmetic operator is used to describe math to be computed. Basic arithmetic operators are addition +, subtraction -, multiplication *, and division /.
*Using division with zero produces Infinity. Infinity is a numeric value representing infinity which is greater than any number.
*
* 3. A comparison operator gives a boolean value of true or false based on the expression. The symbols used for the operators are greater than >, less than <, 
*loosely equal ==, strictly equal ===, not equal !=, not strictly equal !==, greater than or equal to >=, and less than or equal to <=. The comparison is determined
*from left to right.
*
* 4. The three Logical operators are &&, ||, and !. The double ampersand && symbol accepts another set of comparison and if BOTH comparisons are true then it is 
*considered true, false otherwise. The or || symbol is like && but returns true if EITHER expression is true or false if both are true. The not ! operator gives an 
*opposite boolean based on the expression.
*
* 5. Unary operators conduct an operation with only one operand. This operand comes either before or after the operator. Unary operators are more efficient than 
*standard JavaScript as they can be written with fewer characters. The symbols for some operators include increment (++), decrement (--), typeof, delete, and void. 
*
* 6. The ternary operator is the only JavaScript operator that takes three operands; a condition followed by a question mark (?), then an expression to execute if the 
*condition is true followed by a colon (:), and finally the expression to execute if the condition is false.
*
*/

//Examples//
//1. Assignment//
  let time = "limited";
  /*The = sign assigns the value of "limited" to the variable time.
   */
      console.log(time); // prints => limited
//2. Arithmetic //
  let add = 4 + 4 ;
  /*One is added to 2.
   */
     console.log(add); // prints => 3
  let concat = time + " " + add;
  /*When a string is added to a number they may be contatonated into a string.
   */
      console.log(concat); // prints => limited 3
  let subtract = add - 2;
  /*The value of add is reduce by 2.
   */
     console.log(subtract); //prints => 1
  let multiplication = subtract * 6;
  /*The value of subtract is multiplied by 6.
   */
      console.log(multiplication); //prints => 6
  let division = multiplication / 2;
  /*The value of multiplication is divided by 2.
   */
      console.log(division); //prints => 3
  let infinite = multiplication / 0;
  /*The value infinity is produced by dividing any number by 0.
   */
      console.log(infinite); //prints => Infinity

//3. Comparison //
  /*Generally used in if-else if-else statements.
   */
function compare(num){
  if(num < 0){           //Less Than
    return "Less Than"; 
  }
  else if(num > 10){     //Greater Than
    return "Greater Than"; 
  }
  else if(num == "num"){ //Loosely Equal
    return "Loosely Equal";
  }
  else if(num === 8){  //Strictly Equal
    return "Strictly Equal";
  }
  else if(num !== 10){  //Not equal
    return "Not Equal";
  }
  else if(num >= num){  //Greater than or equal to
    return "Greater than or equal";
  }
  else{return "Less than or equal to";}

}
console.log(compare(25));    //prints => Greater Than
console.log(compare(5));     //prints => Not Equal
console.log(compare("num")); //prints => Loosely Equal

//4. Logical //
    let and = 5 === 5 && 6 === 6;
  /*In this instance true is the value as both expressions are true.
   */
    console.log(and);   // prints => true
    let or = 5 === 5 || 5 === 6;
  /*In this instance true is the value as one expression is true.
   */
    console.log(or);
    let not = 5 !== 6;  // prints => true
  /*Since 5 is not (!) strictly equal to 6 the expression is still true.
   */
    console.log(not);   // prints => true

//5. Unary //
    let increment = ++add;  
  /*The value of add (8) is added to by 1
   */
    console.log(increment); // prints => 9
    let decrement = --subtract;
  /*The value of subtract (6) is subtracted by 1.
   */
    console.log(decrement);  // prints => 5
    let type = typeof increment;
  /*The data type of increment is assigned as a string.
   */
    console.log(type);            // prints => number
    console.log(typeof add);      // prints => number
    console.log(typeof concat);   // prints => string
    console.log(typeof compare);  // prints => function
    console.log(typeof and);      // prints => boolean
    let del = delete(decrement);  
  /*Delete works on object properties only and is false since it cannot remove its value. 
   */
    console.log(del);             // prints => false
    let obj = {1: "time", 2: "space", 3: "blue", 4: "box"};
    console.log(obj[3]);          // prints => blue
    delete(obj[3]);               
  /*removes key:value pair. Is now undefined.
   */
    console.log(obj[3]);          // prints => undefined
  let un = void(15);
  /*The void expression does not have a value. 
   */
  console.log(un);                // prints => undefined

//6. Ternary (or conditional) operators //
  let question = typeof increment === "number" ? "yep" : "nope";
  /*The datatype of increment is a number.
   */
  console.log(question);  // prints => yep
