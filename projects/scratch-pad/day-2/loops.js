// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //print each value from the array starting from the begining
  for(let i = 0; i < array.length; i++){
   console.log(array[i]); 
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //print each value from the array starting from the end
  for(let i = array.length -1; i >= 0; i--){
   console.log(array[i]); 
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //return an array of the object's keys
  //iterate over object puting each objects key into an array literal
  let newArr = [];
  for(let key in object){
    newArr.push(key);
  }
  return newArr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //print the keys of the object
  for(let key in object){
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //return an array of the object's values
  //iterate over object puting each objects value into an array literal
  let newArr = [];
  for(let key in object){
    newArr.push(object[key]);
  }
  return newArr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
   //iterate over object printing each objects value 
  for(let key in object){
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //return the lenth of an objects key/value pairs
  //put each key & value into an array and get the lengthof the array
    let kvArr = [];
  for(let keys in object){
    kvArr.push(keys);
  }
  return kvArr.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //put each value into an empty array literal in reverse
  //print each value of the array
  let revArr = [];
  for(let keys in object){
   revArr.unshift(object[keys]);
  }
  for(let i = 0; i <= revArr.length; i++){
    console.log(revArr[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
