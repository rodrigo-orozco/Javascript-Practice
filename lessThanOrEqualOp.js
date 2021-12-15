/* The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to
the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false.  */

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
console.log(testLessOrEqual(15));
console.log(testLessOrEqual(226));
console.log(testLessOrEqual("76"));
console.log(testLessOrEqual("24"));
console.log(testLessOrEqual(9));