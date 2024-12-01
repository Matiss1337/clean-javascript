// OLD
// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe',
// };
//
// const firstName = user.firstName || user['firstName'];

// NEW
// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe',
// };
//
// const {firstName, lastName} = user
// const fullName = `${firstName} ${lastName}`
// console.log(firstName, lastName)
// console.log(fullName)

// NEWER
// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe',
// };
//
// const {firstName, lastName, fullName = `${firstName} ${lastName}`} = user
// console.log(fullName)


// OLD
// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// };
//
// const { status } = response;
// const { firstName } = response.data;

// NEW

// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// };
//
// const { status, data: { firstName} } = response;
//
// console.log(status , firstName);

// OLD
// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// };
//
// const { status } = response;
// const { middleName = 'Jennifer' } = response.data;

// NEW
// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// }
//
// const { status, data: { middleName = 'Jennifer'} } = response
// console.log(status, middleName)

// OLD
// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// };
//
// const { data, status } = response;
// const user = data

// NEW
// const response = {
//     status: 'success',
//     data: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     }
// };
//
// const { data: user, status } = response;
//
// console.log(user);

// OLD
// const fruits = ['🍌', '🍊', '🍎'];
// fruits.shift();
// console.log(fruits);

// NEW
// const fruits = ['🍌', '🍊', '🍎'];
// const [firstFruit, ...otherFruits] = fruits;
// console.log(otherFruits);

// NEWER
const fruits = ['🍌', '🍊', '🍎'];
const [, ...otherFruits] = fruits; //if you dont need the first variable
console.log(otherFruits);

// OLD
// const user = { name: 'Jane' };
//
// function greetUser(user) {
//     console.log(`Hello, ${user.name}!`);
// }
//
// greetUser(user);

// NEW
// const user = { name: 'Jane' };
//
// function greetUser({name}) {
//     console.log(`Hello, ${name}!`);
// }
//
// greetUser(user);

// NEWER
const user = { name: 'Jane' };
const greetUser = ({name}) =>  { console.log(`Hello, ${name}!`);}

greetUser(user);