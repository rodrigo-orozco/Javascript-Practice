/* The inequality operator (!=) is the opposite to the equality operator. It returns false if they are equal and true if they are
not equal. It will convert data types of values while comparing */

function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  
console.log(testNotEqual(10));
console.log(testNotEqual(99));
console.log(testNotEqual("99"));

