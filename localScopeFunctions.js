// Variables which are declared within a function, as well as the parameters, have local scope.

function myTest(){
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);