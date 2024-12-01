// const users = [
//     {
//         firstName: 'Jane',
//         lastName: 'Doe',
//     },
//     {
//         firstName: 'Richard',
//         lastName: 'Roe'
//     }
// ];
//
// // old
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }
//
// // new
// for(const user of users){
//     console.log(user);
// }
//
// users.forEach(user => {
//     console.log(user);
// });

// OLD
const word = 'Hello';
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// NEW
for (const letter of word) {
    console.log(letter);
}

// OLD
// const fruits = ['🍌', '🍊', '🍎'];
// fruits.forEach(fruit => console.log(`I eat ${fruit}`));

// NEW
const fruits = ['🍌', '🍊', '🍎'];
const digest = fruit => console.log(`i eat ${fruit}`)
fruits.forEach(fruit => digest(fruit))

const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    books: [
        {
            title: 'JavaScript: The Definitive Guide, 7th Edition',
            author: 'David Flanagan',
            ISBN: '9781491952023'
        },
        {
            title: 'Modern JavaScript for the Impatient',
            author: 'Cay S. Horstmann',
            ISBN: '9780136502166'
        }
    ]
};

// OLD
for (let i = 0; i < user.books.length; i++) {
    console.log(user.books[i].ISBN);
}

// NEW FOR OF LOOP
for (const book of user.books) {
    console.log(book.ISBN);
}