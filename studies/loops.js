/*
LOOPS


For-in loops
    -used when we know how many times the loop will run
    -used for looping over arrays 
    -have several elements
        start: includes intiliazition of a variable, usually i, at the # the loop will start at
        stop/condition: conditional statement that will keep the loop repeating as long as it is true
        increment/update: updates variable i after each repetition
            i++ adds 1; i-- subtracts 1
            i += 2 adds 2; i -= 2 subtracts 2
*/

//basic forward loop
var array = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
}
console.log(array); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//basic backward loop
var arrayTwo = [];
for (var i = 10; i > 0; i--) {
    arrayTwo.push(i);
}
console.log(arrayTwo); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//looping over an array
for (var i = 0; i < array.length; i++) {
    array[i] += 2;
}
console.log(array); //[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//looping backwards over an array
var revArray = [];
for (var i = array.length -1; i >= 0; i--) {
    revArray.push(array[i] - 1);
}
console.log(revArray); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



/*
For loops
    -used for looping over properties of objects
*/

var obj = {
    name: "Juliana",
    age: 24,
    cats: ["iris", "ghost", "gandalf"]
};

//using loop to print object contents to console
for (var key in obj) {
    console.log(key + ": " + obj[key]);
}
//prints name: Juliana
//       age: 24
//       cats: iris,ghost,gandalf


/*
While loops
    -used when you need a loop to run based on one condition
*/

var count = 1; //same as 'start'
while (count < 10) {
    console.log(count);
    count++ //update/increment included in code block after code, if you do not include the loop will never end!
}
//prints 1-9 to the console
