/* Objects can be thought as a key/value storage, like a dictionary.

    If you have tabular data, you can use an object to lookup values rather than a swithc or if/else approach.

    This is most useful when you know that your input data is limited to a certain range.

*/

const alpha = {

    1: "Z",
    2: "Y",
    3: "X",
    4: "W",

    24: "C",
    25: "B",
    26: "A"
};

console.log(alpha[2]);
console.log(alpha[24]);

const value = 26;
console.log(alpha[value]);


console.log("---------------- PRACTICE ----------------");

/* Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable. */

function phoneticLookup(val) {
    let result = " ";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("echo"));

