//Passing Values to Functions with Arguments

// PARAMETERS -> Placeholders for the values that are to be input to a function when it is called.

function testFun(param1, param2){
    console.log(param1, param2);
}

// Calling the function with two ARGUMENTS

testFun("Hello", "World");


//-------------------Practice------------------

/*
    1.- Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
    2.- Call the function with two numbers as arguments.
 */


function functionWithArgs(par1, par2){
    console.log(par1 + par2);
}

functionWithArgs(6, 9);