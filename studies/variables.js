/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// var and let can be reassigned, const can not
let myCat = "Ghost";
myCat = "Gandalf";
console.log(myCat); //prints "Gandalf"

const myOtherCat = "Iris";
//myOtherCat = "Gandalf";
//console.log(myOtherCat); //prints Type error: assignment to constant variable

const myKat = "Gandalf";
console.log(myKat); //prints "Gandalf"


//all variables (var, let, const) are limited to a functions' scope,
//but only let and const are limited to an if-else chains' scope or a loops' scope or "block scoped"

function isFunction () {
    var x = 5;
    let y = 3;
    const v = 8;
}
// none of these are accessible outside of the function; the variables only exist as long as the function is running 

if (true) {
    var j = 9;
    let k = 5;
    const l = 7;
}
//var j is accessible; k and l are not

for (var i = 0; i < 10; i++) {
    var d = 8;
    let f = 22;
    const g = 4;
}
//var d is accessible; f and g are not


//Hoisting
//before a program is executed, all var and function declarations are "hoisted" to the top of the program
//this means var values will return 'undefined' instead of a reference error if they are accessed before initilaiztion
//it will know the variable has been declared, but it wont know the value until after the value has been assigned 

console.log(q); //prints undefined, still doesnt know value is 3
//console.log(m); //reference error
//console.log(p); //reference error

var q = 3;
let m = 5;
const p = 8;

console.log(q); //prints 3
