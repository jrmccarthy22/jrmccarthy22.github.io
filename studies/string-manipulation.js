/*
STRING MANIPULATION


*/


//Strings can use concatenation operator (+) to combine strings
var greet = "Howdy";
greet += " Partner";
console.log(greet); //prints "Howdy Partner"

//strings can be converted into arrays with .split()
var greetArray = greet.split(" ");
console.log(greetArray); //["Howdy", "Partner"]

//strings are indexed, and therefore have a length property
console.log(greet.length); //prints 13, or number of characters(including spaces/punctuation) in string greet
console.log(greetArray.length); //prints 2, or number of elements in array

//indexOf() method returns the index/position of the first occurrence of given text in a string
console.log(greet.indexOf("Partner")); //prints 6

//lastIndexOf() method returns index/position of last occurence of given text in a string
var str = "how do you do";
console.log(str.lastIndexOf("do")); //prints 11
//both indexOf and lastIndexOf can take a second parameter(a number) as starting index/position of the search

//search() method searches a string for a given value and returns index/position of the first match it finds
console.log(str.search("do")); //prints 4

