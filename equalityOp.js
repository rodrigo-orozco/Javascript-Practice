/* The equality operator (==) compares two values and returns true if they are the same, and false if they are different */

function equalityTest(myVal){
    if(myVal == 10){
        return "Equal";
    }
    return "Not Equal";
}

var var1 = 9;
var var2 = 10;
var var3 = "10";

console.log(equalityTest(var1));
console.log(equalityTest(var2));
console.log(equalityTest(var3));


// ------------------ PRACTICE ----------------

function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));