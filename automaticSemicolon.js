const x = 1;
const y = 2;
if (x === y) {
    console.log('The numbers are equal');
};

// basicaly we dont need then unless we define multiple variable in same line or use loops

// TEST
// Remove all unnecessary semicolons in the code below.
// Format the code accordingly.


// const doWeirdStuff = () => {
//     let firstWord = 'Hello'; let secondWord = 'World'; let arrayOfWords = [firstWord, secondWord];
//     if (arrayOfWords.length === 2) { firstWord = 'Clean'; secondWord = 'JavaScript'; }; arrayOfWords = [firstWord, secondWord]; for (let wordIndex = 0; wordIndex < arrayOfWords.length; wordIndex++;) { if (arrayOfWords[wordIndex].includes('p')) { return arrayOfWords[wordIndex] }; };
// };

// RESULT

const doWeirdStuff = () => {
    let firstWord = 'Hello',
    secondWord = 'World',
    arrayOfWords = [firstWord, secondWord]

    if (arrayOfWords.length === 2) { firstWord = 'Clean'; secondWord = 'JavaScript'; }
    arrayOfWords = [firstWord, secondWord];

    for (let wordIndex = 0; wordIndex < arrayOfWords.length; wordIndex++) { if (arrayOfWords[wordIndex].includes('p')) { return arrayOfWords[wordIndex]}}
}

// i personaly dont like this lesson and i will keep using semicolons