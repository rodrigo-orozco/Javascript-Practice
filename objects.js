/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects
through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

*/

const myDog = {
    "name": "Rufo",
    "legs": 4,
    "tails": 1,
    "friends": ["Clifford", "Blue", "Stacy"]
};

// Accesing objects with dot notation

const dogName = myDog.name;
const dogFriends = myDog.friends;

console.log(dogName);
console.log(dogFriends);

// If the name of the property has a space, we will need to use bracket notation as follows:

// Accesing objects with bracket notation

const testObj= {
    "an entree": "hamburguer",
    "my side": "veggies",
    "the drink": "water"
};

entree = testObj["an entree"];
side = testObj["my side"];
drink = testObj["the drink"];

console.log(entree);
console.log(side);
console.log(drink);