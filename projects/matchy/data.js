/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//initilize a variable named animal to an empty object
//add the property "species" to animal using dot notation with a value 
//add the property "name" to animal using either notaion (dod is better) with a value
//add the property "noises" to animal using bracket notation with a value of an empty array
//print "animal object"

var animal = {};
animal.species = "bird";
animal["name"] = 'Red';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//initilize a variable named noises to an empty array
//using bracket notation add a value to its first element noises[0]
//using push add another sound to noise
//using unshift add another sound to noise
//using the length of the array[noises] add another sound to noise to the end of the array

var noises = [];
noises[0] = "caw";
noises.push("Sraw");
noises.unshift("plop");
noises[noises.length] = "Flap";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using brackets add the new noises property to the animal array
//using dot notation add another sound to noises 

animal['noises'] = noises;
animal.noises.push("scratch");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//initilize a variable named animals to an empty array
//push animal into animals
//test the look of the code using console.log()


/* Step 6 - A Collection of Animals
 1. [ ] Create a variable named `animals` and assign it to an empty array.
 2. [ ] `push` our `animal` that we created to `animals`.
 3. [ ] `console.log` `animals`. What does it look like?
 4. [ ] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [ ] `push` `duck` to `animals`
 6. [ ] `console.log` `animals`. What does it look like?
 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?

*/
var animals = [];
animals.push(animal);
console.log(animals);
//initilize a variable named duck to { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
//push duck to animals
//test that it looks right using console.log()
var duck = { species: 'duck',
             name: 'Jerome',
             noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
//initilize a variable with a different dog to with an object with keys of species, name, & noises with at least 2 sounds on noises
//push duck to animals
//test that it looks right using console.log()
var dog = { species: 'dog',
             name: 'Mike',
             noises: ['Woof!', 'grr', 'sneeze', 'snore'] };
animals.push(dog);
var cat = { species: 'cat',
             name: 'Princess',
             noises: ['Hiss!', 'scratch', 'purr', 'plop'] };
animals.push(cat);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//arrays are a zero indexed list without the key value pairs of an object and we only need the name
//this will be usefull later when using math.random() to select a random index in the array
var friends = [];
//use another function to generate a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function getRandom(animals){
    return animals[getRandomInt(animals.length -1)];
}

friends.push(getRandom(animals).name);
getRandom(animals).friends = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
