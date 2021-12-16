function testElse(val){
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }
    else{
        result = "5 or Smaller";
    }

    return result;
}

console.log(testElse(4));
console.log(testElse(46));

console.log("---------------- ELSE IF ---------------");

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
      return "Between 5 and 10";
    }
    
  }
  
  console.log(testElseIf(4));
  console.log(testElseIf(65));
  console.log(testElseIf(8));