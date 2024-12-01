console.log('Arrow functions');

function isAdmin(user) {
    return user.role ==='admin'
}

const isAdminArrowFunction = (user) => user.role === 'admin';

const groceries = ['apple', 'banana', 'kiwi'];

groceries.forEach(function(item) {
    console.log(item)
});

// just remove function and {}
groceries.forEach((item) => console.log(`${item} in arrow function`));

// extract function for better readability
const logItem = (item) => console.log(item);
groceries.forEach(logItem);

const getUser = () => {
    return {
        name: 'John Doe'
    }
}

// just replace return with () around {}
const getUserArrowFunction = () => ({name: 'John Doe'});

// major drawback is that arrow functions use current Lexical Scope and cant use .this
// so it uses variable which are on the same level basicaly




// TEST
// Rewrite the functions below as arrow functions.
// Omit the curly braces and ‘return’ where possible.

// function greetUser(name) {
//     return 'Hello, ' + name + '!'
// }
//
// function multiplyByTwo(number) {
//     return number * 2
// }
//
// function isTruthy(variable) {
//     return Boolean(variable) === true
// }
//
// function getBook() {
//     return {
//         title: 'JavaScript: The Definitive Guide',
//         author: 'David Flanagan',
//     }
// }

// Convert the callback function into an arrow one.
// Extract it onto a separate line, and assign it to the ‘isEmptyString’ variable.
// Pass it to the ‘filter()’ method by reference.

// const isEmptyString = () => null
// const strings = ['Hello', '', 'World']
// const emptyStrings = strings.filter(function(string) {
//     return string === ''
// })

// RESULT
const name = "Matt";
const greetUser = (name) => 'Hello, ' + name + '!';
const multiplyByTwo = (number) => number * 2 ;
const isTruthy = (variable) => Boolean(variable);
const getBook = () => ({
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
});

// creates funcion with boolean which can be passed in filter
const isEmptyString = (string) => string === '';
const strings = ['Hello', '', 'World']
// filter creates new array of object which pass the function
const isEmptyStrings = strings.filter(isEmptyString);