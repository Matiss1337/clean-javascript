// OLD
// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe',
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe',
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe',
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe',
//     },
// ];
//
// let areThereJennifers = false;
// for (const user of users) {
//     if (user.middleName !== 'Jennifer') continue;
//     areThereJennifers = true;
//     break;
// }
//
// console.log(areThereJennifers);

// NEW
// const users = [
//     {
//         firstName: 'Jane',
//         middleName: 'Jennifer',
//         lastName: 'Doe',
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe',
//     },
//     {
//         firstName: 'John',
//         middleName: 'Jack',
//         lastName: 'Joe',
//     },
//     {
//         firstName: 'Gina',
//         middleName: 'Jennifer',
//         lastName: 'Woe',
//     },
// ];
//
// const userMiddleNameIsJennifer = ({ middleName}) => middleName === "Jennifer";
// const areThereJennifers = Boolean(users.filter(userMiddleNameIsJennifer).length);
//
// console.log(areThereJennifers);

// NEWER
const users = [
    {
        firstName: 'Jane',
        middleName: 'Jennifer',
        lastName: 'Doe',
    },
    {
        firstName: 'Richard',
        lastName: 'Roe',
    },
    {
        firstName: 'John',
        middleName: 'Jack',
        lastName: 'Joe',
    },
    {
        firstName: 'Gina',
        middleName: 'Jennifer',
        lastName: 'Woe',
    },
];

const userMiddleNameIsJennifer = ({ middleName}) => middleName === "Jennifer";
const areThereJennifers = users.some(userMiddleNameIsJennifer)

console.log(areThereJennifers);