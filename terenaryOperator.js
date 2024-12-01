// Old
// const hourOfDay = new Date().getHours();
// let partOfDay;
//
// if (hourOfDay < 17) {
//     partOfDay = 'day';
// } else {
//     partOfDay = 'evening';
// }


// new
// const hourOfDay = new Date().getHours();
// let partOfDay = hourOfDay < 17 ? 'day' : 'evening'
// console.log(partOfDay)


// OLD
// const hourOfDay = new Date().getHours();
// let partOfDay
//
// if (hourOfDay < 12) {
//     partOfDay = 'morning';
// } else if (hourOfDay < 17) {
//     partOfDay = 'afternoon';
// } else if (hourOfDay < 21) {
//     partOfDay = 'evening';
// } else {
//     partOfDay = 'night';
// }

// NEW
const hourOfDay = new Date().getHours();
let partOfDay = hourOfDay < 12 ? 'morning'
    : hourOfDay < 17 ? 'afternoon'
    : hourOfDay < 21 ? 'evening'
    : 'night'

console.log(partOfDay)


// OLD
// const isAuthenticated = false;
// if (isAuthenticated) return showHomepage();
// redirectToLoginPage();

// NEW
// const isAuthenticated = false;
// const isUser = true
// isAuthenticated ? showHomePage()
//     : isUser ? rederctToLoginPage()
//     : redirectToSignupPage()
