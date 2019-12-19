/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes to parameters, animals (an array) & name (a string)
//if the animal(name) exists return the animal
//if it does not exist return null
function search(animals, name) {
   for (var i = 0; i < animals.length; i++){
       if (animals[i].name === name){
           return animals[i];
       }
    }  return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that searches through animals(an array)  a name(a string) to search for and its replacement( a string)
//use a loop to iterate through animals and if a match is found replace it 

function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals.splice(animals[i], 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//search through animals(array) for name(string)
//if a match is found remove it
//for loop to iterate through an array
//use splice to remove the name if found
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals.splice(animals[i]);
        }
        else{return ;}
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make a function called `add` that has the parameters of animals & animal 
//animals is an array and animal is the object
//check tha the name property exists
//check that the species property exists
//checks that the names do NOT match
//if these are all true push the animal object to the animals array

function add(animals, animal) {
   if(animal.species.length > 0 && animal.name.length > 0 && !animals.some((element) => (element.name === animal.name))) {
           return animals.push(animal);
           }
        }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
