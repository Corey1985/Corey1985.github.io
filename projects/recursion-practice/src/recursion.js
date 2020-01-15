// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

//input: a number
//output: a number added to each interger of its self untill it is 0
//constraint: use recursion, stopping once n === 0
//edgecase: what if n is less than 0
var factorial = function(n) {
//base case
  if(n === 0){
    return 1;
  }
  //edge case if negative
  else if(n < 0){
    return null;
  }
  // what is factorialed
  else{
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

//i: array
//o: sum of array intergers
//c: use recursion, stopping when nothing is in array
//e: 
var sum = function(array) {
  //base case
  if(!array.length){
    return 0;
  }
  //each iteraton is added to sum and then sliced off
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
//text in blue, does not to be done


var arraySum = function(array) {
};

// 4. Check if a number is even.

//i: a number
//o: boolean
//c: use recursion
//e:
var isEven = function(n) {
  //base case
  if(n < 0){
    n = Math.abs(n);
  }
  else if(n === 0){
    return true;
  }
  else if(n === 1){
    return false;
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

//i: number
//o: sum of all intergers below a number
//c: use recursion
//e: account for negative numbers
var sumBelow = function(n) {
   if(n === 0){
    return 0;
  }
  //edge case if negative
  //if less than 0 iterate +1
  //if greater than 0 iterate -1 
  n = n < 0 ? n + 1 : n - 1;
  // what is added
    return n + sumBelow(n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
// should return the integers between two numbers
// should accept negative integers
// should accept starting integers larger than ending
// e: should return empty array if no integers in range between the 2 numbers

//i: 2 numbers
//o: a range of numbers between the 2 starting parameters within an array
//c: use recursion
//e: 
var range = function(x, y) {
  //base case
  if(x - y === 1 || y - x === 0){
    return [];
  }
  //recursive call
  y = y > x ? y - 1 : y + 1;
  return y === x ? [] : range(x,y).concat(y); 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

//i: Base= starting value, exp = how many times the value is multiplied by its original value 
//o: a number multiplied exponentinally
//c: use recursion
//e: what if the base is negative
var exponent = function(base, exp) {
  //base case
  if(exp === 0){
    return 1;
  }
  // recursive casses
 return exp > 0 ?
  base * exponent(base, exp - 1) : 1 / (base * exponent(base, -1 * exp - 1));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//i: a number
//o: boolean 
//c: use recursion
//e: is it the power of 2?
var powerOfTwo = function(n) {
  //base case
  if(n === 1){
    return true;
  }
  else if(n %  2 === 1 || n === 0){
    return false;
  }
  //recursive case
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.

//i: string
//o: string in reverse
//c: use recursion
//e:
var reverse = function(string) {
  if(string.length === 0){
    return "";
  }
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.

//i: string
//o: boolean of true if it is a palindrome
//c: use recursion
//e:
var palindrome = function(string) {
  //remove whitespace 
  let str = string.replace(/[\s]/gi, "");
  //base cases
  if(str === "" || str.length === 1){
    return true;
  }
  else if(str[0].toLowerCase() !== str.slice(-1).toLowerCase()){
    return false;
  }
  //recursive case
  else{ return palindrome(str.substr(1, str.length -2));}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

//blue text no test
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

//i: 2 numbers
//o: one number multiplied by another
//c: use recursion and only addition and subtraction
//e: what if a number is negative
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } 
   else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

//i: 2 strings
//o: a boolean of true if they match
//c: use recursion
//e:
var compareStr = function(str1, str2) {
  //base case
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
  // recursive case
  else if(str1.charAt(0) !== str2.charAt(0)){
   return false; 
  }
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

//i: string
//o: an array of each strings character seperated
//c: use recursion
//e:
var createArray = function(str){
  //base case
  if(str === ""){
    return [];
  }
  //recursive case
  else{return [str.charAt(0)].concat(createArray(str.substr(1)))}
};

// 17. Reverse the order of an array

//i: array
//o: the same array in reverse
//c: use recursion
//e:
var reverseArr = function (array) {
  //base case
  if(array.length === 0){
    return [];
  }
  //recursive case
  else{return [array.pop()].concat(reverseArr(array));}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

//i: value= any datatype, length= the number of times that value is in the array
//o: an array with only the value in it the number of times as the length
//c: use recursion
//e:
var buildList = function(value, length) {
  //base case
  if(length === 0){
    return [];
  }
  //recursive case
  else{return [value].concat(buildList(value, length - 1));}
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

//i: an array and a value 
//o: a count of how many times value is in array
//c: use recursion
//e:
var countOccurrence = function(array, value) {
  //base case
  if(array.length === 0){
    return 0;
  }
  else if(array[0] === value){
    return 1 + countOccurrence(array.slice(1), value);
  }
  else{return countOccurrence(array.slice(1), value)}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

//i: an array & a functionn callback
//o: an array of mutated values
//c: use recursion
//e:
var rMap = function(array, callback) {
  //base case
  if(array.length === 1) { 
  	return callback(array); 
  }
  //recursive case
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

//i: a number
//o: the number located at index  
//c: use recursion
//e:
var nthFibo = function(n) {
  //base case
if( n < 0){
    return null;
  }
  else if(n < 2){
    return n;
  }
  //recursive case
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//i: an array of strings
//o: an array with all the strings calitilized
//c: use recursion
//e:
var capitalizeWords = function(input) {
  //base case
  if(input.length === 0){
    return [];
  }
  //recursive case
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

//i: an array of strings
//o: an array of strings with only the first letter of the string capitilized
//c: use recursion
//e:
var capitalizeFirst = function(array) {
   //base case
  if(array.length === 0){
    return [];
  }
   //recursive case
  return [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

//i: a string and an object
//o: an object with the count of each letter in the string with the letter being the key
//c: use recursion
//e:
var letterTally = function(str, obj) {
    let result = Array.from(arguments)[1] || {};
    if(str.length === 0) {
        return result;
    }
    if(!result[str[0]]) {
        result[str[0]] = 1;
    } else {
        result[str[0]]++;
    }
    return letterTally(str.slice(1), result);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

//i: an array
//o: an array with all duplicates removed
//c: use recursion
//e:
var compress = function(list) {
  //base case
  if (list.length === 0){
    return [];
  }
  //recursive cases
  if(list[0] !== list[1]){
    return [list[0]].concat(compress(list.slice(1)));
  } 
  return compress(list.slice(1));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

//i: array of numbers
//o: an array with fewer zeros. 
//c: using recursion, if a zero is next to a zero make them one zero
//e: the 
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return []; 
  }
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } 
    else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

//i: an array of numbers
//o: if positive numbers output negative numbers in an array and vice versa
//c: use recursion
//e:
var alternateSign = function(array) {
   if (array.length === 0){
     return [];
     }
    if(array[0] < 0) { 
      array[0] = -array[0];
    }
    if(array[1] > 0) {
      array[1] = -array[1];
      
    }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

//i: string with numbers inside it
//o: String with the numbers converted to their word equivilent
//c: use recursion
//e:
var numToText = function(str) {
  //make an array from the string
  str = str.split(" ");
  var numWord = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
  //base case
    if(str.length === 1){
      return (!isNaN(Number(str[0]))) ? numWord[Number(str[0])] : str[0];
    }
    //recursive case
    else if(!isNaN(Number(str[0]))){
      return (numWord[Number(str[0])] + ' ' + numToText(str.slice(1).join(" ")));
    }
    else{
      return  [str[0]] + ' ' + numToText(str.slice(1).join(' '));
      
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
