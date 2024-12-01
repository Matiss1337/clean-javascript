// OLD
// const users = ['Jane Doe', 'Richard Roe'];
// let found = false;
//
// for (const user of users) {
//     if (!found) {
//         if (user === 'Jane Doe') {
//             console.log(`We found ${user}!`); // Will log 'We found Jane Doe!'
//             found = true;
//         }
//     }
// }

// NEW
const users = ['Jane Doe', 'Richard Roe'];

for (const user of users) {
    if (user === 'Jane Doe') {
        console.log(`We found ${user}!`);
        break
    }
}

const users1 = ['Jane Doe', 'Richard Roe'];

for (const user1 of users1) {
    if (user1 !== 'Jane Doe') continue
    console.log(`We found ${user1}!`);
    break
}

// BREAK doest return, just stops loops itself
// CONSTINUE ONLY LETS YOU RUN FURTHER IF IF STATEMENT IS MET