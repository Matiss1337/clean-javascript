// TEST
// Keep the code below as is:

// const currentDate = new Date()
// const currentHour = currentDate.getHours()
//
// // Rewrite the ‘logTimeOfDay()’ function to use the ‘AND’ operator instead of ‘if’.
//
// const logTimeOfDay = () => {
//     if (currentHour < 12) console.log('Morning')
//     if (currentHour >= 12 && currentHour < 17) console.log('Afternoon')
//     if (currentHour >= 17 && currentHour < 21) console.log('Evening')
//     if (currentHour >= 21) console.log('Night')
// }
//
// // The ‘greet()’ function has the ‘timeOfDay’ variable.
// // It is equal to ‘Morning’ before noon and to ‘false’ after.
// // Rewrite lines 26 and 27 into a single line of code.
// // Get rid of ‘if’. Use the logical ‘OR’ operator within the template literal.
// // Use the ‘Afternoon’ string as a fallback value if ‘timeOfDay’ is falsy.
//
// const greet = () => {
//     const timeOfDay = currentHour < 12 && 'Morning'
//     if (timeOfDay) return `Good ${timeOfDay}!`
//     return 'Good Afternoon!'
// }

// RESULT
const currentDate = new Date()
const currentHour = currentDate.getHours()

// Rewrite the ‘logTimeOfDay()’ function to use the ‘AND’ operator instead of ‘if’.

const logTimeOfDay = () => {
    if (currentHour < 12) console.log('Morning')
    if (currentHour >= 12 && currentHour < 17) console.log('Afternoon')
    if (currentHour >= 17 && currentHour < 21) console.log('Evening') ||  console.log('Night')
}

// The ‘greet()’ function has the ‘timeOfDay’ variable.
// It is equal to ‘Morning’ before noon and to ‘false’ after.
// Rewrite lines 26 and 27 into a single line of code.
// Get rid of ‘if’. Use the logical ‘OR’ operator within the template literal.
// Use the ‘Afternoon’ string as a fallback value if ‘timeOfDay’ is falsy.

const greet = () => {
    const timeOfDay = currentHour < 12 && 'Morning';
    return `Good ${timeOfDay || 'Afternoon'}!`;
};