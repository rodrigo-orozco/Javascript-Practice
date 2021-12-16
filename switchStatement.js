/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements
which define various possible values. Statements are executed from the first matched case value until a break is encountered. */

function lowerToUpper(lowercaseLetter){
    switch(lowercaseLetter){
        case "a":
            console.log("A");
            break;
        case "b":
            console.log("B");
            break;
    }
}

lowerToUpper("a");

console.log("------------------- PRACTICE ----------------");

const answers = ["alpha", "beta", "gamma","delta"];

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch(val){
    case 1:
      answer = answers[0];
      break;
    case 2:
      answer = answers[1];
      break;
    case 3:
      answer = answers[2];
      break;
    case 4:
      answer = answers[3];
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(3));

// We can add a default statement to all the scenaries in which we can´t cover the situation with a case.
