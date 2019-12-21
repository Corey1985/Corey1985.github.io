//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//loop through an object
//place the values into an array
//return the array
function objectValues(object) {
    let newArr = [];
    for(let key in object){
        newArr.push(object[key]);
    }
    return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//iterate through an object
//add its keys & values to a string
//return the string WITH spaces
function keysToString(object) {
   return Object.keys(object).join(" ") ;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//iterate through an object 
//create a place to store the keys
//if the value is a string add it too the array
//return the array as a string
function valuesToString(object) {
    let newString = [];
    for(key in object){
        if( typeof object[key] === "string"){
        newString.push(object[key]);
        }
    }return newString.join(" ");  
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//determine if collection is an object or array
//must use Array.isArray() before type of
function arrayOrObject(collection) {
     if(Array.isArray(collection)){
        return "array";
    }
    else{
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//capitilize the first leter in the string
//the method toUpperCase() only capitilzes the whole word
//use char at to dexignate the character to be capitilized
//then slice in the remaining string
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//convert the string of multiple words into an array instance of words seperated by commas based off the original strings' spaces
//iterate through the array and capitilize each wordss' first letter
//join the array back into a string with spaces replacing the commas
function capitalizeAllWords(string) {
   string = string.split(" ");
    for(let i = 0; i < string.length; i++){
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");
}

 
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a welcome message which concatonates a string (welcome message) to the name inside of an object
//need propper spacing and punctuation
function welcomeMessage(object) {
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object with a name and a species and return '<Name> is a <Species>'
// need to upper case the name and species
function profileInfo(object) {
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//if this object has a noises array return them as a string separated by a space
//if there are no noises return 'there are no noises' 
function maybeNoises(object) {
    if(object.noises === undefined || object.noises.length === 0){
        return "there are no noises";
    }
    else{
        return object.noises.join(" ");
    }
}
    
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//determine if a string has a word in it
//return true if the word is in the string
//false otherwise
function hasWord(string, word) {
        if(string.includes(word)){
            return true;
        }
        else{
            return false;
        }
    }


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object
//add the name to the object's friends array
// then return the object 
function addFriend (name, object) {
  if(Array.isArray(object.friends) === true){
      object.friends.push(name);
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a name and an object 
// return true if <name> is a friend of <object> 
// false otherwise
function isFriend(name, object) {
   
        if(object.hasOwnProperty("friends") && object.friends.includes(name)){
            return true;
        }
        else{
            return false;
            
        }
    }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a name and a list of people
// and return a list of all the names that <name> is NOT friends with
function nonFriends(name, array) {
 let nope = [];
    for (let i = 0; i < array.length; i++){
        if (name !== array[i].name){
            if(!array[i].friends.includes(name)){
                nope.push(array[i].name);
                }
            }
        }
    return nope;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object, a key and a value
// update the property <key> on <object> with new <value>
// If <key> does not exist on <object> create it
function updateObject(object, key, value) {
        object[key] = value;
        
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object and an array of strings
// remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
  for(key in object){
  if(array.includes(key)){
    delete object[key];
        }
    }
  }  


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an array  
//return an array with all the duplicates removed
function dedup(array) {
    var dups = {};
    return array.filter((el) => {
        var hash = el.valueOf();
        var isDup = dups[hash];
        dups[hash] = true;
        return !isDup;
    });
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}