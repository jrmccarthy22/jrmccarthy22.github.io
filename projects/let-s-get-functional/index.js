// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

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
 *    npm start --prefix ./jrmccarthy22.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//input array
//output number of males
//use filter
var maleCount = function(array) {
    var males = _.filter(array, function(value, i, array) {
        return value.gender === "male";
    });
    return males.length;
};

//input array
//output number of females
//use reduce
var femaleCount = function(array) {
    var females = array.reduce(function(seed, value, i) {
        if (value.gender === "female") {
            seed = seed + 1;
        } return seed;
    }, 0);
    return females;
}

//input array
//output string of name
var oldestCustomer = function(array) {
    var oldestAge = array.reduce(function(accum, value, i) {
        if (value.age > accum) {
            accum = value.age;
        } return accum;
    }, 0);
    for (var i = 0; i < array.length; i++) {
        if (array[i].age === oldestAge) {
            var oldestCust = array[i];
        }
    } return oldestCust.name;
}

//input array
//output string of name 
var youngestCustomer = function(array) {
    var youngestAge = array.reduce(function(accum, value, i) {
        if (value.age < accum) {
            accum = value.age;
        } return accum;
    }, 0);
    for (var i = 0; i < array.length; i++) {
        if (array[i].age === youngestAge) {
            var youngestCust = array[i];
        }
    } return youngestCust.name;
}

var averageBalance = function() {
    
};

var firstLetterCount = function() {
    
};

var friendFirstLetterCount = function() {
    
};

var friendsCount = function() {
    
};

var topThreeTags = function() {
    
};

//input array
//output object with three key pairs male, female, non-binary
//use reduce
var genderCount = function(array) {
    return _.reduce(array, function(result, personObj) {
        if (result[personObj.gender]) {
            result[personObj.gender] += 1;
        } else {
            result[personObj.gender] = 1;
        } return result;
    }, {});
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
