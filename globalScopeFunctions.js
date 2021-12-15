// Scope --> Visibility of variables
// Global Scope --> Variables declared outside of a function block

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assigning 5 to oopsGlobal
oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}