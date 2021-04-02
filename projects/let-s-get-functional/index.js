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
    array.sort(function(a, b) {
        return a.age-b.age;
    });
    return array[0].name;
};

//input array
//output number
var averageBalance = function(array) {
    var total = array.reduce(function(accum, person, i) {
        var balance = person.balance;
        var balance1 = balance.replace(/,/g, "");
        var balance2 = balance1.slice(1);
        accum += parseFloat(balance2);
        return accum;
    }, 0);
    return total / array.length;
};

//input array, letter
//output number of elements in array that start with letter
var firstLetterCount = function(array, char) {
    var result = 0
    for (var i =0; i < array.length; i++) {
        var name = array[i].name;
        name = name.charAt(0).toUpperCase();
        char = char.toUpperCase();
        if (name.startsWith(char) === true) {
            result += 1;
        }
    } return result;
};

//input array, customer, letter
//number of friends the customer has whose name start with letter 
var friendFirstLetterCount = function(array, person, char) {
    //find {person} in the array and set their friends array to a variable 
    for (var i =0; i < array.length; i++) {
        if (array[i].name === person) {
            var friends = array[i].friends;
        }
    }
    //loop through friends array and add 1 to result variable if name starts with {char}
    //make sure names are all same case (upper/lower)
    var result = 0;
    for (var i =0; i < friends.length; i++) {
        var name = friends[i].name;
        name = name.charAt(0).toUpperCase();
        char = char.toUpperCase();
        if (name.startsWith(char) === true) {
            result += 1;
        }
    } return result;
};

//input array, name
//output array of names of people who have -name- in their friends list

var friendsCount = function(array, name) {
    
    var result = [];
    for (var i =0; i < array.length; i++) {
        var friends = array[i].friends;
        for (var j =0; j < friends.length; j++) {
            if (friends[j].name === name) {
                result.push(array[i].name);
            }
        }
    }
    return result;
    
};


//find three most common tags among all customers tags 
//input array
//output array of three 
var topThreeTags = function(array) {
    
    //create one array with all tags of all customers
    function push(array, newArray) {
     for(var i = 0; i < array.length; i++) {
            newArray.push(array[i]);
     }
      return newArray;
}
    var allTags = [];
    for(var i = 0; i < array.length; i++) {
     push(array[i].tags, allTags);
    }
    //create object that counts # of times each tag appears in allTags
    var tagCount = {};

    for(var i = 0; i < allTags.length; i++) {
        var value = allTags[i];
        if(tagCount[value]) {
            tagCount[value]++;
        }
        else {
            tagCount[value] = 1;  
        }
    };
    //create nested array of [[tag, value], [tag, value]]
    var countArray = [];
    for (var key in tagCount) {
        countArray.push([key, tagCount[key]]);
    };
    //sort array by value
    countArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    //make new array with first three tag names
    var namesArray = [];
    for(var i = 0; i < 3; i++) {
        namesArray.push(countArray[i][0]);
    }
    //return array
    return namesArray;
    
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
