/*
OPERATORS

    -operators act on our data
    -classified by what they do and how many operands(values that operators act on) they require
        unary: one operand
            ! : BANG operator, or NOT, reverses true/false values
            - : negation, unary arithmetic operator, reverses positive/negative
            typeof : returns type of value
        binary: two operands
        ternary: three operands
            conditional (ternary) operator is only operator with three operands:
                 a condition followed by a question mark (?)
                then an expression to execute if the condition is truth-y followed by a colon (:)
                the expression to execute if the condition is false-y
             (condition ? expIfTrue : expIfFalse)
             

/*
Assignment operators
    =, +=, -=, /=, *=
    permanent changes
    (a += 2) is same as (a = a + 2)
*/
var num = 5;
num += 3; //num now equal to 8
num -= 4; //num now 4
num *= 5; //num now 20
num /= 10; 
console.log(num); //prints 2
/*

Arithmetic operators
    =, +, -, *, /, %(returns remainder of division operation)
*/
var math = 5 * 4;
console.log(math); //prints 20
console.log(math / 2); //prints 10
console.log(math % 3); //prints 2 (remainder of 20/3)
//does not alter original value {math} without an assignment =

/*
Comparison operators
    >, <, >=, <=, ===, !==
    used in conditionals, compares two values and resolve to a boolean value, true or false
*/
var x = 5
var y = 9
if (x < y) {
    console.log("lessThan")
} else if (x > y) {
    console.log("greaterThan")
} //prints "lessThan" because that conditional resolved to true

var f = 7
var g = "7"
if (f === g) {
    console.log("equal");
} else if (f == g) {
    console.log("equalish");
} //prints "equalish" because it is the same value, but not the same data type
  //nonstrict comparison rarely used 
  var m;
 if (!m) {
     console.log("not here");
 } //prints "not here" because !bang/NOT operator is testing to see if variable is defined
/*
Logical operators
    &&: AND operator, used inbetween two conditionals, and only evaluates to true if BOTH resolve to true
    ||: OR operator, used inbetween two conditionals, and evaluates to true if one or the other resolve to true
*/
var j = 3;
var k = 8;
var l = 6;

if (j < k && k < l) {
    console.log("both");
} else if (j < k || k < l) {
    console.log("one");
} //prints "one" because it passes j < k but not k < l