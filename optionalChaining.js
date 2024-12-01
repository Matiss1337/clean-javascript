// TEST


// Keep the `book` object below intact.

const book = {
    title: 'JavaScript: The Definitive Guide, 7th Edition',
    price: 24.25
}

// Rewrite the ‘getAuthor()’ function.
// Use optional chaining to safeguard the result
// from throwing an exception where the `book.author`
// property does not exist.

// const getAuthor = () => book.author.name

// Rewrite the ‘getPrice()’ function.
// Use optional chaining to safeguard the result
// from throwing an exception where the `book.discount`
// property does not exist.

// const getPrice = () => book.price - (book.discount.max ?? 0)

// RESULT
const getAuthor = () => book.author?.name

const getPrice = () => book.price - (book.discount?.max ?? 0)

getAuthor()
getPrice()