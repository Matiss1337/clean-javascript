// Using ,
const { log } = console;
const square = (number) => (log('Squaring...'), number ** 2);
const result = square(4);
log(result);

const firstName = "jane", lastName = "Doe";
const user = {firstName, lastName};
console.log(user)

// Using bitwiser
const number = 23.9;
const bitwiseOr = number | 0;
const bitwiseNot = ~~number;
console.log(bitwiseOr); // 👉 Will also log 23
console.log(bitwiseNot); // 👉 Will also log 23

// Unique Values
const items = [1, 1, 2, 3, 5, 5, 1];
// let uniqueItems = [];
// items.forEach(item => uniqueItems.includes(item) || uniqueItems.push(item));
// console.log(uniqueItems);

const uniqueItems = [...new Set(items)] //cleanest way to remove non uniques
log(uniqueItems)

// Alphabetical Order ignore lowercase and uppercase
const unsortedArray = ['Spread', 'rest', 'reduce', 'ternary', 'if', 'For', 'arrow'];
const compareWords = (a, b) => a.localeCompare(b);
const sortedArray = unsortedArray.sort(compareWords);
console.log(sortedArray);

// Default parameters
const greet = (name, message = 'Hello') => `${message}, ${name}!`;
console.log(greet('Jane'));
console.log(greet('Jane', '¡Hola'));

// Includes
const food = 'apple';
const fruits = ['apple', 'banana', 'peach', 'pear', 'orange', 'pineapple'];

fruits.includes(food) && console.log('It is a fruit!');