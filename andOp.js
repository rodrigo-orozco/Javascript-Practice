/* The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */

function andOp(num){
    if (num > 5 && num < 10) {
        return "Yes";
    }
    return "No";
}

console.log(andOp(9));
console.log(andOp(17));
console.log(andOp("76"));

// ------------- PRACTICE --------------

console.log("----------------PRACTICE-----------------");

function testLogicalAnd(val) {
  
    if(val <= 50 && val >= 25){
      return "Yes";
    }
    return "No";
  }

console.log(testLogicalAnd(50));
console.log(testLogicalAnd(37));
console.log(testLogicalAnd("23"));

