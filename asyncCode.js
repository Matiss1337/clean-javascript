// OLD
// const options = { method: 'POST', headers: { 'Content-Type': 'application/json' } };
//
// const organization = { name: 'Acme Inc.' };
// const person = { firstName: 'Jane', lastName: 'Doe' };
// const deal = { title: 'New deal' };
//
// const createNewDeal = () => {
//     fetch('/organizations', { body: JSON.stringify(organization), ...options })
//         .then(response => response.json())
//         .then(({ organizationId }) => {
//             return fetch('/persons', { body: JSON.stringify({ ...person, organizationId }), ...options })
//                 .then(response => response.json())
//                 .then(({ personId }) => {
//                     return fetch('/deals', { body: JSON.stringify({ ...deal, personId }), ...options })
//                         .then(response => response.json())
//                         .then(({ dealId }) => {
//                             console.log(dealId);
//                         });
//                 });
//         });
// };

// NEW if you care about sequence
// const options = { method: 'POST', headers: { 'Content-Type': 'application/json' } };
//
// const organization = { name: 'Acme Inc.' };
// const person = { firstName: 'Jane', lastName: 'Doe' };
// const deal = { title: 'New deal' };
//
// const createNewDeal = async () => {
//     const organizationResponse = await fetch('/organizations', { body: JSON.stringify(organization), ...options })
//     const { organizetionId } = await organizationResponse.json()
//     const personResponse = await fetch('/persons', { body: JSON.stringify({ ...person, organizationId }), ...options })
//     const { personId } = await personResponse.json()
//     const dealResponse = await fetch('/deals', { body: JSON.stringify({ ...deal, personId }), ...options })
//     const { dealId } = await dealResponse.json()
//     console.log(dealId)
// }

// OLD
// const getUser = async () => {
//     const userResponse = await fetch('/users/1');
//     return userResponse.json();
// };
//
// const getBooks = async () => {
//     const booksResponse = await fetch('/users/1/books');
//     return booksResponse.json();
// };
//
// const compileData = async () => {
//     const user = await getUser();
//     const books = await getBooks();
//     const compiledData = { ...user, books };
// };

// NEW
const getUser = async () => {
    const userResponse = await fetch('/users/1');
    return userResponse.json();
};

const getBooks = async () => {
    const booksResponse = await fetch('/users/1/books');
    return booksResponse.json();
};

const compileData = async () => {
    const [user, books] = await Promise.all([getUser(), getBooks()])
    const compiledData = { ...user, books };
};

// can check Promise.allSettled()