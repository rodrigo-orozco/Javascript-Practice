/* If statements are used tomake decisions in code.
    When the condition evaluates to true, the program executes the statement. When it is false, thre statements won't execute. */

function test(myCondition){
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

console.log(test(true));
console.log(test(false));