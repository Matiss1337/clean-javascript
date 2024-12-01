// basicaly

// Nullish Coalescing  ??=: Assigns a value only if the variable is null or undefined.
// Logical AND  &&=: Assigns a value only if the variable is truthy.
// Logical OR ||=: Assigns a value only if the variable is falsy.

// only works if null or undefined, 0 is fine
const user = {
    firstName: 'Jane',
    lastName: 'Doe'
}
user.taxRate ??= 0.35 // 👈 Will also assign 0.35


// only works if exsisting value is tru already
const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    credit: 13.32
}
user.credit &&= true // 👈 Will also assign true

// only works if value is false
const book = {
    title: 'JavaScript: The Definitive Guide, 7th Edition',
    author: '',
    ISBN: '9781491952023'
}
book.author ||= 'The author is missing.' // 👈 Will assign `The author is missing.


// TEST
// Add a new statement to the ‘getAccount()’ function.
// Use the logical ‘AND’ assignment operator.
// Assign ‘true’ to the ‘balance’ property if it’s larger than 0.
// Keep the rest of the function intact.

// const getAccount = () => {
//     const account = {
//         balance: 137.12,
//         IBAN: 'FR4817569000308283344937J44',
//         type: 'credit'
//     }
//     return account
// }

// Add a new statement to the ‘getUser()’ function.
// Use the logical nullish assignment operator.
// Assign ‘anonymous’ to the ‘nickname’ property if it doesn’t exist.
// Keep the rest of the function intact.

// const getUser = () => {
//     const user = {
//         id: '2252a0ac-a1fd-11ed-a8fc-0242ac120002'
//     }
//     return user
// }

// Add a new statement to the ‘getProduct()’ function.
// Use the logical OR assignment operator.
// Assign ‘Free shipping’ to the ‘shippingFee’ property if it doesn’t exist.
// Keep the rest of the function intact.

// const getProduct = () => {
//     const product = {
//         SKU: 196475,
//         shippingFee: 0
//     }
//     product.shippingFee ||= 'Free shipping'
//     return product
// }
//
// console.log(JSON.stringify(getProduct()))

// RESULT
// Add a new statement to the ‘getAccount()’ function.
// Use the logical ‘AND’ assignment operator.
// Assign ‘true’ to the ‘balance’ property if it’s larger than 0.
// Keep the rest of the function intact.

const getAccount = () => {
    const account = {
        balance: 137.12,
        IBAN: 'FR4817569000308283344937J44',
        type: 'credit'
    }
    account.balance &&= account.balance > 0;
    return account;
}

// Add a new statement to the ‘getUser()’ function.
// Use the logical nullish assignment operator.
// Assign ‘anonymous’ to the ‘nickname’ property if it doesn’t exist.
// Keep the rest of the function intact.

const getUser = () => {
    const user = {
        id: '2252a0ac-a1fd-11ed-a8fc-0242ac120002'
    }
    user.nickname ??= "bubu"
    return user
}

// Add a new statement to the ‘getProduct()’ function.
// Use the logical OR assignment operator.
// Assign ‘Free shipping’ to the ‘shippingFee’ property if it doesn’t exist.
// Keep the rest of the function intact.

const getProduct = () => {
    const product = {
        SKU: 196475,
        shippingFee: 0
    }
    product.shippingFee ||= 'Free shipping';
    return product
}
