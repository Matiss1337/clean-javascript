// OLD
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
//
// let filteredAnimals = [];
//
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].includes('a')) {
//         filteredAnimals.push(animals[i]);
//     }
// }
//
// console.log(filteredAnimals);

// NEW
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
//
// let filteredAnimals = [];
//
// for (const animal of animals) {animal.includes('a') && filteredAnimals.push(animal);} //remove if statement, add for of loop
//
// console.log(filteredAnimals);

// NEWER
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
// const filteredAnimals = animals.filter(animal => animal.includes('a')) //moved logic to filter and no need for empty array at first and pushing
//
// console.log(filteredAnimals);

// NEWER ER
// const animals = ['horse', 'dog', 'cat', 'rabbit', 'lynx'];
// const hasLetterA = (word) => word.includes('a')
// const filteredAnimals = animals.filter(hasLetterA) //moved logic to funtion
//
// console.log(filteredAnimals);


// OLD
// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe'
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe'
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe'
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe'
//     }
// ];
//
// let middleNames = [];
//
// for (let i = 0; i < users.length; i++) {
//     middleNames.push(users[i].middleName);
// }
//
// console.log(middleNames);

// NEW //using MAP
// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe'
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe'
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe'
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe'
//     }
// ];
//
// const middleNames = users.map(({middleName}) => middleName)
// const middleNamesThatExist = middleNames.filter(middleName => middleName); //filter for undefined or null basicaly
//
// console.log(middleNamesThatExist);

// NEWER
// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe'
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe'
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe'
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe'
//     }
// ];
//
// const middleNamesThatExist = users.map(({middleName}) => middleName).filter(middleName => middleName) //chain
// console.log(middleNamesThatExist);

// NEWER ER

// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe'
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe'
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe'
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe'
//     }
// ];
// // extract logic for reusabilty and readability
// const extractMIddleName = ({middleName}) => middleName //decunstruct object and add value to variable
// // const isTruthy = (item) => item // checks if value is not undefinded or null, can be replaced by filter(Boolean)
// const middleNamesThatExist = users.map(extractMIddleName).filter(Boolean) //nice
// console.log(middleNamesThatExist);

// OLD
const users = [
    {
        firstName: 'Jane',
        middleName: 'Jennifer',
        lastName: 'Doe'
    },
    {
        firstName: 'Richard',
        lastName: 'Roe'
    },
    {
        firstName: 'John',
        middleName: 'Jack',
        lastName: 'Joe'
    },
    {
        firstName: 'Gina',
        middleName: 'Jennifer',
        lastName: 'Woe'
    }
];

const extractMiddleName = ({ middleName }) => middleName
const isNotPrevious = (item, index, array) => array[index -1] !== item
const middleNamesThatExist = users.map(extractMiddleName).sort().filter(Boolean).filter(isNotPrevious)


console.log(middleNamesThatExist);