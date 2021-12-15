/* The greater than operator (>) compares two numbers. If the number to the left is greater than the number to the right,
it returns true. Otherwise, it returns false. */

function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
console.log(testGreaterThan(10));
console.log(testGreaterThan(20));
console.log(testGreaterThan(120));
