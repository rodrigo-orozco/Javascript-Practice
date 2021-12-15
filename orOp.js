/* The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false. */

function orOp(num){
    if (num > 10 || num < 5) {
        return "No";
    }
    return "Yes";
}

console.log(orOp(78));
console.log(orOp(7));

console.log("------------------ PRACTICE ----------------");

function testLogicalOr(val) {
    // Only change code below this line
  
    if(val < 10 || val > 20){
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(6));
console.log(testLogicalOr(16));