// Original
// const getStageOfLifeByAge = (age) => {
//     let stageOfLife = ''
//     if (age < 1) {
//         stageOfLife = 'Infancy'
//     }
//     else if (age >= 1 && age < 4) {
//         stageOfLife = 'Toddlerhood'
//     }
//     else if (age >= 4 && age < 10) {
//         stageOfLife = 'Childhood'
//     }
//     else if (age >= 10 && age < 21) {
//         stageOfLife = 'Adolescence'
//     }
//     else if (age >= 21) {
//         stageOfLife = 'Adulthood'
//     }
//     return stageOfLife
// }


// new
const getStageOfLifeByAge = (age) => {
    if (age < 1) return 'Infancy'
    if (age < 4) return 'Toddlerhood'
    if (age < 10) return  'Childhood'
    if (age < 21) return  'Adolescence'
    return  'Adulthood'
}

const age = 18
const description = getStageOfLifeByAge(age)
console.log(description) // 👈 Will log `Adolescence`

// Original
// const userIsAdmin = (user) => {
//     if (user.role !== 'admin') return false
//     if (user.manager !== true) return false
//     return true
// }


// new
const userIsAdmin = (user) => {
    if (user.role === 'admin') return true
    if (user.manager === true) return true
    return false
}

// newer, i dont like this too much, previous was good already
const userHasAdminRole = (user) => user.role === 'admin'
const userHasManagerRole = (user) => user.manager
const userIsAdmin = (user) => userHasManagerRole(user) || userHasManagerRole(user)


// TEST

// Keep the code below as is:

// const currentDate = new Date()
// const currentHour = currentDate.getHours()
// const currentDayIndex = currentDate.getDay()

// Simplify the ‘getTimeOfDay()’ function.
// Remember to get rid of all the nesting, curly braces, and ‘else’ keywords.
// Use the guard clause to return early.



// const getTimeOfDay = () => {
//     let timeOfDay = ''
//     if (currentHour < 12) {
//         timeOfDay = 'Morning'
//     }
//     else if (currentHour >= 12 && currentHour < 17) {
//         timeOfDay = 'Afternoon'
//     }
//     else if (currentHour >= 17 && currentHour < 21) {
//         timeOfDay = 'Evening'
//     }
//     else if (currentHour >= 21) {
//         timeOfDay = 'Night'
//     }
//     return timeOfDay
// }

// Rewrite the ‘isItWeekend()’ function below to avoid the inequality operator and use positive logic.
// Extract both conditions from the new ‘isItWeekend()’ function into separate ‘isItSunday()’ and ‘isItSaturday()’ arrow functions.
// Use the logical or statement to test for both cases in the ‘isItWeekend()’ function.
// Remember that you don‘t need the ‘return’ keyword and curly braces in all the three functions as they are one-liners.

// const isItWeekend = () => {
//   const currentDayIndex = new Date().getDay()
//   if (currentDayIndex !== 0) return false
//   if (currentDayIndex !== 6) return false
//   return true
// }

// const isItSaturday = () => currentDayIndex === 6
// const isItSunday = () => currentDayIndex === 0
// const isItWeekend = () => isItSaturday() || isItSunday()

// RESULT

// Keep the code below as is:

const currentDate = new Date()
const currentHour = currentDate.getHours()
const currentDayIndex = currentDate.getDay()

// Simplify the ‘getTimeOfDay()’ function.
// Remember to get rid of all the nesting, curly braces, and ‘else’ keywords.
// Use the guard clause to return early.



const getTimeOfDay = () => {
    if (currentHour < 12) return 'Morning'
    if (currentHour < 17) return 'Afternoon'
    if ( currentHour < 21) return 'Evening'
    return 'Night'
}

// Rewrite the ‘isItWeekend()’ function below to avoid the inequality operator and use positive logic.
// Extract both conditions from the new ‘isItWeekend()’ function into separate ‘isItSunday()’ and ‘isItSaturday()’ arrow functions.
// Use the logical or statement to test for both cases in the ‘isItWeekend()’ function.
// Remember that you don‘t need the ‘return’ keyword and curly braces in all the three functions as they are one-liners.

const isItWeekend = () => {
  const currentDayIndex = new Date().getDay()
  if (currentDayIndex === 0) return true
  if (currentDayIndex === 6) return true
  return false
}

const isItSaturday = () => currentDayIndex === 6
const isItSunday = () => currentDayIndex === 0
const isItWeekend = () => isItSaturday() || isItSunday()