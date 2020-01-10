// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-corey1985");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let maleArr = _.filter(array, function(customerObj, index, arr){
    return customerObj.gender === "male";
});
return maleArr.length;
};

//find the amount of females using reduce
//set a seed of 0 to keep the number datatype
//if object is a female increment previous value
//if no female return previous value unchanged
var femaleCount = function(array){
  return _.reduce(array, function(previous, currentElement, index){
        if(currentElement.gender === "female"){
            previous++;
        }
        return previous;
    },0);
    
};

//find the name of the oldest customer
//compare each age that is in an object
//return the name
var oldestCustomer = function(array){
   var age = _.reduce(array, function(prev, curr, index){
        if (prev.age < curr.age){
            return curr;
        } 
        return prev;
    },); 
    return age.name;
};

//find the name of the youngest customer
//compare each age that is in an object
//return the name
var youngestCustomer = function(array){
   var age = _.reduce(array, function(prev, curr, index){
        if (prev.age > curr.age){
            return curr;
        } 
        return prev;
    },); 
    return age.name;
};

//return the average balance of all customeers
//convert the string into an array removing symbols and white spaces 
var averageBalance = function(array){
    let total = _.reduce(array,function(prev, ele, index){
        let balance = parseInt(ele.balance.replace(/[^\w\s]/gi, ""),10);
        prev += balance;
        return prev;
    }, 0);
    let average = (total/(array.length * 100));
    return average;
};

// Find how many customer's names begin with a given letter
//return a number
//must account for upper and lower case letter
//must use stricly equal
var firstLetterCount = function(array, letter){
    return _.reduce(array, function(prev, curr, index){
        if(curr.name[0].toLowerCase() === letter.toLowerCase()){
            prev++;
        }
            return prev;
    }, 0);
};

//Find how many friends of a given customer have names that start with a given letter
//account for upper and lower case letters
//have to associate the customer with its name in customers
//compare that name's friends with the first letter of the compareLetter
var friendFirstLetterCount = function(array, customer, letter){
    return _.reduce(array, function(prev, curr, index){
        if(curr.name.toLowerCase() === customer.toLowerCase()){
            return _.reduce(curr['friends'], function(prev, curr, index){
                if(curr.name[0].toLowerCase() === letter.toLowerCase()){
                    ++ prev;
                } else {
                    return prev;
                }
                    return prev; 
            }, 0);
        } else{
            return prev;
        }
    }, 0);
};

// i: array & a name
// o: array of friends
// c:
// edge: 
var friendsCount = function(array, customerName){
return _.reduce(array, function(previous, current){
    let list =  _.pluck(current.friends, "name")
        if ((_.contains(list, customerName)) === true){
             previous.push(current.name);
        }
             return previous;
    }, []);
    
};

//Find the three most common tags among all customers' associated tags
//tally the amount of each tag of all customers
//return the array
var topThreeTags = function(array){
    let allTags = [];
//creates an array of all tags from customer
 let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          allTags.push(curr.tags);
      }
      return  [].concat(...allTags);
 });
 
 // an object with the tag name and count of that name  
 let tags = _.reduce(newTags,function(prev,curr){
          if(prev[curr] === undefined){
              prev[curr] = 1;
          } else {
              prev[curr]++;
          } return prev;
},{});

let countArray = [];
//adds key:value pair to itself on each iteration
    _.each(tags,function(count,word,object){
        countArray.push([word,count]);
    });
        countArray.sort(function(a,b){
        return b[1] - a[1];
    });
    
//final array of top 3 
    let topThree = [];
    for(var i = 0; i < 3; i++){
        topThree.push(countArray[i][0]);
    } 
    return topThree;
    
};
//      let arrTags = [];
//
        
        ////creates an array of all tags from customer
//  let newTags =  _.reduce(array,function(prev,curr,i){
//       if(curr.tags !== undefined){
//           arrTags.push(curr.tags);
//       }
//       return  [].concat(...arrTags);
//  });
//
        
        //// an object with the tag name and count of that name  
//  let tags = _.reduce(newTags,function(prev,curr){
//           if(prev[curr] === undefined){
//               prev[curr] = 1;
//           } else {
//               prev[curr] += 1;
//           } return prev;
// },{});
        
        ////adds key:value pair to itself on each iteration
// var newArray = [];
// _.each(tags,function(count,word,object){
//     newArray.push([word,count]);
// });
//  newArray.sort(function(a,b){
//   return b[1] - a[1];
//  });
        
        ////array with top 3 values
//  var final = [];
//  for(var i = 0; i < 3; i++){
//      final.push(newArray[i][0]);
//  } return final;
// };


var genderCount = function(array){
    let genderObj = {};
     genderObj.male =  _.reduce(array, function(prev, current, i){
        if(current.gender === "male"){
            prev++;
        }return prev;
    }, 0),
     genderObj.female = _.reduce(array, function(prev, current, i){
        if(current.gender === "female"){
            prev++;
        }return prev;
    }, 0),
     genderObj["non-binary"] = _.reduce(array, function(prev, current, i){
        if(current.gender === "non-binary"){
            prev++;
        }return prev;
    }, 0);
    
    return genderObj;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
