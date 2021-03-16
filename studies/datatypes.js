/*
 * DATATYPES:
 *
 * 0. simple/primitive datatypes 
    include: string- character/text data, used w ""
             number- numerical data
             boolean- true or false value
             null- no value, nullified by programmer
             undefined- no value, uninitialized
             NaN- not a number; 
        -do not collect or aggregate other values
        -operations on simple values return new simple values, does not alter orginial value
        -copy by value
            when assigning or passing, simple data is copied from one variable to the next
            
*/

//basic examples
var string = "Hello";
var num = 4;
var bool = false;
var notANum = NaN;
var unDefined;
var nulls = null;

//copy by value example
var one = 1;
var two = one; //value stored in one is copied into two

two = 2; //changing value of two doesn't affect one
console.log(one); //prints 1


/*
            
 * 1. complex datatypes:
        -hold/collect other values; therefore they have infinite size
        -copy by reference
            when assigning, complex data is passed by reference
    include: arrays- defined with square brackets [];
                     indexed list of similar values; can hold simple datatypes and other arrays
                     can acces individual elements with bracket notation and indexes
                     
             objects- defined with curly brackets {};
                      unordered, stores key-value pairs, or 'properties'
                      can acces individual elements with bracket or dot notation using key names
*/

//copy by reference example
var un = {name: "bob"};
var deux = un; //deux is now pointing/referring to the same object as un

deux.name = "jim"; //changing the value with deux affects all variables pointing/referring to this same object
console.log(un.name); //prints 'jim'


var myArray = [11, "cat", true, [1, 2, 3]];
            //  0    1      2       3
            //you can use indexes to acces array elements 
console.log(myArray[1]); //prints "cat"

    //because arrays are indexed, they have a length property
    //the last object in an array will always be array[array.length - 1]
console.log(myArray.length); //prints 4


var myObj = {
    name: "Iris",
    age: 2,
    coat: "tortoiseshell"
}
    //objects have no indexes or length property, so key names are used to access individual properties
console.log(myObj["coat"]); //prints 'tortoiseshell'; note: bracket notation requires string of keyname
console.log(myObj.name); //prints 'Iris'


/*
 * 2. infinity/-infinity:
    -
 */
 
 