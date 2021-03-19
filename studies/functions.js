/*
FUNCTIONS

Functions are resuable blocks of code that accept inputs, processes them, and returns new data value

Two phases of utilizing functions:
    declaration- creating function
    execution/calling- using function 

Function inputs are called parameters in the context of defining the function, 
and are used as placeholders for the actual values(arguments), which are used when calling the completed function

Scope: refers to what variables are accessible, and where
    functions can see and modify variables in parent/global scopes
    however functions cannot access variables in a nested function(child scope),
        or any let/const variable in an if-else chain, or a loop within the function (block scopes)

Closure: a function definition can reference variables from its' parentscope

*/

//scope/closure example
function bonk() {
    var arr = [];
    return function(array) {
        console.log(arr); //inner function accesses variable arr from parent functions' scope
    }
}

//basic named function declaration
//named function declarations are hoisted to the top of their scope, so thay can be called before they are sequentially defined
function name(parameter1, parameter2) {
    //code to be executed
    //dont forget return statement if neccessary 
}

//functions can also be assigned to a variable and called with that name
var name2 = function(param1, param2) {
    //codey code
} 