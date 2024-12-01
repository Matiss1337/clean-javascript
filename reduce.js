// OLD
// const numbers = [1, 5, 4, 2, 9];
// let result = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
// }
//
// console.log(result);

// // NEW
// const numbers = [1, 5, 4, 2, 9];
// const sum = (a, b) => a + b;
// const result = numbers.reduce(sum, 0)
//
// console.log(result);


// OLD
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
// let animalsWithA = 0;
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].includes('a')) {
//         animalsWithA++;
//     }
// }
// console.log(animalsWithA);

// NEW
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
// const addIfHasLetterA = (accumalator, word) => accumalator + word.includes('a') //can add includes, cause true and false is converted to 0 and 1 which can be added in reduce, thus calling.Boolean would also work, nice
// const animalsWithA = animals.reduce(addIfHasLetterA, 0)
// console.log(animalsWithA);

// OLD //keep track on how many times each name is mentioned
// const names = ['Jennifer', 'Jack', 'Jennifer'];
// let occurrences = {};
// for (const name of names) {
//     if (name in occurrences) {
//         occurrences[name] = occurrences[name] + 1;
//     } else {
//         occurrences[name] = 1;
//     }
// }
// console.log(occurrences);

// NEW
// const names = ['Jennifer', 'Jack', 'Jennifer'];
// const addOccurrence = (object, key) => ({...object, [key]: (object[key] || 0) + 1 })
// const occurrences = names.reduce(addOccurrence, {})
// console.log(occurrences);

// Spread Operator {...object}:
//
// Creates a shallow copy of the object.
//     Ensures that the original object is not mutated.
//     Computed Property [key]:
//
// Allows dynamic property names.
//     key is used as the property name in the new object.
// Value (object[key] || 0) + 1:
//
// object[key] || 0: Checks if object[key] exists. If it does, use its value; otherwise, use 0.
// + 1: Increments the value by 1.
// Need more time with this!!!

// OLD
// const names = ['Jennifer', 'Jack', 'Jennifer'];
// let uniqueNames = [];
//
// for (const name of names) {
//     if (!uniqueNames.includes(name)) {
//         uniqueNames.push(name);
//     }
// }
//
// console.log(uniqueNames);

// NEW

// const names = ['Jennifer', 'Jack', 'Jennifer'];
// const isNotPrevious = (item, index, array) => array[index -1] !== item
// const uniqueNames =  names.sort().filter(isNotPrevious)
//
// console.log(uniqueNames);

// NEWER
const names = ['Jennifer', 'Jack', 'Jennifer'];
const addToArrayUnique = (array, item) => array.includes(item) ? array : [...array, item] //checks if items is in array, if it is returns array, if not returns array with new item in it
const uniqueNames = names.reduce(addToArrayUnique, []) //intializes empty array and addToArrayUnique
console.log(uniqueNames);

// OLD
// const calculateIncome = (revenue) => revenue / 2;
// const subtractDeduction = (income) => income / 100 * 90;
// const calculateTax = (taxBase) => taxBase / 100 * 20;
//
// const revenue = 2000;
//
// const income = calculateIncome(revenue);
// const taxBase = subtractDeduction(income);
// const tax = calculateTax(taxBase);
// console.log(tax);

// NEW
const calculateIncome = (revenue) => revenue / 2;
const subtractDeduction = (income) => income / 100 * 90;
const calculateTax = (taxBase) => taxBase / 100 * 20;

const revenue = 2000;

const executeFunction = (accumulator, fn) => fn(accumulator)
const pipeline = [calculateIncome, subtractDeduction, calculateTax]
const tax = pipeline.reduce(executeFunction, revenue);
console.log(tax);