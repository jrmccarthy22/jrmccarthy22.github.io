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
var animal = {};
animal.species = "cat";
animal["name"] = "Iris";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises.push("meow");
noises.push("hiss");
noises.unshift("miaou");
noises.push("mew");
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal["noises"].push("mroww");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // brackets w string of keys or dot w key name, or for-in loop
 * 2. What are the different ways of accessing elements on arrays?
 * //with index no. or with for loop
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
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
}
animals.push(duck);
console.log(animals);

var snake = {
    species: "reptile",
    name: "Nagini",
    noises: ["hisss", "ssnek"]
}
animals.push(snake);

var spider = {
    species: "arachnid",
    name: "Shelob",
    noises: ["spider noise", "crawl"]
}
animals.push(spider);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
var friends = [];
function getRandom(array) {
    
    function getRandomInd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var index = Math.floor(Math.random() * (max - min) + min);
  return index;
    } return getRandomInd(0, array.length);
}

friends.push(animals[getRandom(animals)]["name"]);
console.log(friends);
animals[0]["friends"] = friends;
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