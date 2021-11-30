// push() is used to append data to the end of an array

const arr1 = [1, 2, 3];
console.log(arr1);
arr1.push(4);
console.log(arr1);

const arr2 = ["Rodrigo", "Juan", "Mario", "César"];
console.log(arr2);
arr2.push("Leonardo");
console.log(arr2);


// pop() removes the last element of an array and returns it

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();

console.log(threeArr);
console.log(oneDown);

// shift() removes the last element of the array and returns it

const ourArray = ["Stipmson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);
console.log(ourArray);

// unshift() adds the element at the beggining of the array

const myArray = ["Stimpson", "J", "cat"];
console.log(myArray);
myArray.shift();
myArray.unshift("Happy");
console.log(myArray);