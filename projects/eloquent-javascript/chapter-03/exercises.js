////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
if (num % 2 === 0) {
   return true;
 } else {
   return false;
 }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
var sum = 0;
  for (var i = 0; i < string.length; i++) {
   if (string[i] === char) {
    sum = sum + 1; 
   }
  } return sum;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
var sum = 0;
  for (var i = 0; i < string.length; i++) {
   if (string[i] === "B") {
    sum = sum + 1; 
   }
  } return sum;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};