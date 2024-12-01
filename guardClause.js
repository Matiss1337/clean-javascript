// Basicaly early error trowing or returning early

// TEST
// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     new: true,
//     gender: 'female'
// }
//
// const greetUserIfNew = (user) => {
//     if (user.new) {
//         const fullName = user.firstName + ' ' + user.lastName
//         return 'Hello, ' + fullName + '!'
//     }
// }
//
// const greetUserIfNewFemale = (user) => {
//     if (user.new) {
//         if (user.gender === 'female') {
//             return 'Hello, Ms. ' + user.lastName + '!'
//         }
//     }
// }


// RESULT
const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    new: true,
    gender: 'female'
}

const greetUserIfNew = (user) => {
    if (!user.new) return
    const fullName = user.firstName + ' ' + user.lastName
    return 'Hello, ' + fullName + '!'
}

const greetUserIfNewFemale = (user) => {
    if (!user.new) return
    if (!user.gender !== 'female') return
    return 'Hello, Ms. ' + user.lastName + '!'
}