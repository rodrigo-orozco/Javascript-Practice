/*   In case we do not add a return in our function, the value returned by the function will be undefined   */

let sum = 0;

function addSum(num){

    sum = sum + num;
}

addSum(3);

console.log(sum);