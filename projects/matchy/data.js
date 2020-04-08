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

//creating a var named animal and assigning it to empty object
var animal = {};
//dot notation to give animal the species property with a value
animal.species ='dog';
//bracket notation for name
animal['name'] = 'Murphy';
//give animal noises empty array
animal.noises = [];
//printing
console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//variable named noises, empty array
var noises = [];
//bracket notation to add a noise
noises[noises.length] = 'woof';
//another noise
noises.push('bark');
//using unshift
noises.unshift('howl');
//bracket noise
noises[noises.length] = 'yelp';
noises.push('ruff');
//printing
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//assigning noises array to our animal
animal['noises'] = noises;

//adding noise to animal > noises
animal.noises.push = 'ruff';
console.log(animal);
console.log(animal.noises)
console.log(noises);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 *bracket or dot notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 *bracket notation
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

//empty animals array
var animals = [];
//pushing animal to animals
animals.push(animal);
console.log(animals); //Its an array with a single object in it, my dog

//quack time
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//pushing to animals
animals.push(duck);
console.log(animals); //array with two objects in it, my duck and dog

//2 more animals
var cat = {
    species: 'cat',
    name: 'Raz',
    noises: ['purr', 'mow']
}
animals.push(cat);

var fish = {
    species: 'fish',
    name: 'Oscar',
    noises: ['glub', 'blub']
}
animals.push(fish);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//While the friends themselves should be objects, I think the list is better suited to be an array. Since they don't need to have keys and pair qualities, they can just be the list of objects.
var friends = [];

//I-none, but pulls from animals array
//O-random index of input array using math.random
function getRandom() {
    return Math.floor(Math.random() * Math.floor(animals.length))
}
friends.push(animals[getRandom()].name);
console.log(friends)

//adding friends list to animal in animal array
animals[0]['friends'] = friends;
console.log(animals)

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