const getBeverageByAge = (age) => {
    if (age >= 21) return 'beer'
    return 'milk'
}

const notice = `You are drinking ${getBeverageByAge(21)}.`
console.log(notice)

// const firstName = 'Jane'
// const lastName = 'Doe'
// const translateString = (string) => string.replaceAll('Hi', 'Hola').replaceAll('How are you', '¿Como estas')
// const greeting = `${translateString('Hi')}, ${firstName} ${lastName}! ${translateString('How are you')}?`
// console.log(greeting)


const firstName = 'Jane'
const lastName = 'Doe'
const translate = (string) => string.replaceAll('Hi', '¡Hola').replaceAll('How are you', '¿Como estas')
const concatenate = (placeholders) => (string, index) => string.concat(placeholders[index] || '')
const translateLiteral = (strings, ...placeholders) => strings.map(translate).map(concatenate(placeholders)).join('')
const greeting = translateLiteral`Hi, ${firstName} ${lastName}! How are you?`
console.log(greeting)