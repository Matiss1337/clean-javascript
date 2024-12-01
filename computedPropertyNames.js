const key = 'name'
const user = {}
user[key] = "Jane"
console.log(user.name) // will log Jane

const user1 = { [key]: 'Jane'}
console.log(user1.name) // will log Jane

const identifier = 'isbn'
const book = {
    title: 'JavaScript: The Definitive Guide, 7th Edition',
    author: 'David Flanagan',
    [identifier.toUpperCase()]: 9781491952023
}
console.log(book.ISBN) // 👈 Will log '9781491952023'

// TEST

// Use the dynamic ‘title’ property straight away in the initialized object.

// const addDynamicProperty = () => {
//     const key = 'title'
//     const book = { author: 'David Flanagan' }
//     book[key] = 'JavaScript: The Definitive Guide'
//     return book
// }

// Use the computed property syntax to utilize the ‘abbreviate(property)’ expression inside the ‘website’ object.

// const useExpressionAsKey = () => {
//     const abbreviate = (phrase) => phrase.split(' ').map(word => word[0]).join('')
//     const property = 'Uniform Resource Locator'
//     const key = abbreviate(property)
//     const website = {
//         title: 'Google'
//     }
//     website[key] = 'https://google.com'
//     return website
// }

// Use the square bracket notation inside the ‘lettersWithIndex’ object to increment indices:

// const generateDynamicKeyValuePairs = () => {
//     const alphabet = 'abc'
//     let i = 0
//     let lettersWithIndex = {}
//     while (i < alphabet.length) {
//         lettersWithIndex[i] = alphabet[i++]
//     }
//     return lettersWithIndex
// }

// Add the ‘author’ property to the ’book’ object:

// const addPropertyFromVariable = () => {
//     const author = 'David Flanagan'
//     const book = { title: 'JavaScript: The Definitive Guide' }
//     book.author = author
//     return book
// }


// RESULT
const addDynamicProperty = () => {
    const key = 'title';
    const book = {
        author: 'David Flanagan',
        [key]: 'JavaScript: The Definitive Guide'
    };
    return book;
};

const useExpressionAsKey = () => {
    const abbreviate = (phrase) => phrase.split(' ').map(word => word[0]).join('');
    const property = 'Uniform Resource Locator';
    const key = abbreviate(property);
    const website = {
        title: 'Google',
        [key]: 'https://google.com'
    };
    return website;
};

const generateDynamicKeyValuePairs = () => {
    const alphabet = 'abc';
    let i = 0;
    let lettersWithIndex = {};
    while (i < alphabet.length) {
        lettersWithIndex[i] = alphabet[i++];
    }
    return lettersWithIndex;
};

const addPropertyFromVariable = () => {
    const author = 'David Flanagan';
    const book = {
        title: 'JavaScript: The Definitive Guide',
        author
    };
    return book;
};

// Main thing is that you can define variable and value by adding variable and also you can compute variable name or value with [] brackets