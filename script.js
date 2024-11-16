'strict'
// primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);
//reference types
const jessica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('before marriage:', jessica);
console.log('after marriage:', marriedJessica);
//marriedJessica = {};

//copying objects

const jessica2 = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
    family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';
console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);