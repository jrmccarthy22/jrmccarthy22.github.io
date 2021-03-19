/*
CONTROL FLOW

If
Else-if
Else
Switch
*/


//Conditional statements resolve to a true or false value, and that true/false determines what code will run

//if-else chains use control flow to control what code runs based on these conditionals 
if (2 === 2) {
    console.log("equal");
} else if (typeof 2 === "number") {
    console.log("number");
} else {
    console.log("nothing");
} //will return "equal" because after the first condition is met (the if statement), no other code will run
//even though the second condition is true

if (typeof 2 === "number") {
    console.log("number");
} else if (2 === 2) {
    console.log("equal");
} else {
    console.log("nothing");
} //will return "number" because now that condition comes first

if (typeof "wow" === "number") {
    console.log("number");
} else if (2 === 3) {
    console.log("equal");
} else {
    console.log("nothing");
} //will return "nothing"
//if none of the conditions in the if or else-if statements are met, the else code will run
//else has no condition, and is often used as a 'default' statement
