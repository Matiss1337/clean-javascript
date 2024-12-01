// OLD
// let user = {
//     names: {
//         first: 'Jane',
//         last: 'Doe',
//     }
// };
//
// let userCopy = Object.assign({}, user);

// NEW
// let user = {
//     names: {
//         first: 'Jane',
//         last: 'Doe',
//     }
// };
//
// let userCopy = {...user}
// console.log(userCopy)

// OLD
// const userStatus = {
//     active: true,
//     admin: false
// };
//
// const userName = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };
//
// const user = {
//     firstName: userName.firstName,
//     lastName: userName.lastName,
//     admin: userStatus.admin,
//     active: userStatus.active
// };


// const userStatus = {
//     active: true,
//     admin: false
// };
//
// const userName = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };
//
// const user = {...userName, ...userStatus};
// console.log(user)

// OLD
// const fruits = ['🍎', '🍌', '🍊'];
// const vegetables = ['🥒', '🥕', '🥦'];
// const healthyFood = fruits.concat(vegetables);
// console.log(healthyFood)

// NEW
const fruits = ['🍎', '🍌', '🍊'];
const vegetables = ['🥒', '🥕', '🥦'];
const healthyFood = [ ...fruits, ...vegetables];
console.log(healthyFood)

// OLD
// const word = 'Hello';
// const letters = word.split('');
// console.log(letters);

// NEW
const word = 'Hello';
const letters = [...word]
console.log(letters);

// OLD
// const middleName = 'Jennifer';
// let user = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };
//
// if (middleName) user.middleName = middleName;

// NEW
// const middleName = 'Jennifer';
// let user = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };
//
// if (middleName) user = { ...user, middleName };

// NEWER

const middleName = 'Jennifer';
let user = {
    firstName: 'Jane',
    lastName: 'Doe',
    ...(middleName) && {middleName}
}
console.log(user)

// OLD
// const numbers = [1, 2, 3];
// const logNumbers = (x, y, z) => console.log(x) || console.log(y) || console.log(z);
// logNumbers(numbers[0], numbers[1], numbers[2]);

// NEW
// const numbers = [1, 2, 3];
// const logNumbers = (x, y, z) => console.log(x) || console.log(y) || console.log(z);
// logNumbers(...numbers)

const logNumber = (number) => console.log(number);
const logNumbers = (...numbers) => numbers.forEach(logNumber);
logNumbers(1, 2, 3, 4, 5);