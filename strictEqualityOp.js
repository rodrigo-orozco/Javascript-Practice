/* Strict Equality (===) is the counterpart to the equality operator (==).
    In the equality operator, if two types of variables had the same "number", the are considered equal. Meanwhile in the strict equality
    operator, thew would be not equal and returns false.
*/

function testStrict(val){
    if (val ===7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));
console.log(testStrict("7")); //Not Equal, bc they are different type of var.
