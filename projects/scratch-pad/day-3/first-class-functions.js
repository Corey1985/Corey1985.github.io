// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //test if a given value is greater than base
    //if there is no value parameter how can it be expressed?
    //use a finction within a function and return that function
    
    return function val(value){
      if(value > base){
          return true;
      }
      else{return false;}
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //test if a given value is less than base
    //use a finction within a function and return that function
    return function val(value){
      if(value < base){
          return true;
      }
      else{return false;}
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //test if a string starts with that character
    //use toLowerCase to only test for the character and not its lower case
    //need a function within a function to use a second parameter String
    return function str(string){
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        }
        else{return false;}
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //test if a string ends with that character
    //use toLowerCase to only test for the character and not its lower case
    //need a function within a function to use a second parameter String
     return function str(string){
        if(string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        }
        else{return false;}
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //use an empty array for the new modified string/array to be placed
    //loop over the string/array with the modify parameter
    //return string/array
    let modArr = [];
    for(let i = 0; i < strings.length; i++){
        modArr.push(modify(strings[i]));
    }
    return modArr;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //determine if all strings pass a test
    //return a boolean of the result
        for(let i = 0; i < strings.length; i++){
            if(test(strings[i]) === false){
                return false;
            }
        }
            return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}