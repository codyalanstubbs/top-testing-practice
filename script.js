export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = () => {
    const add       = (a,b) => {return a + b};
    const subtract  = (a,b) => {return a - b};
    const divide    = (a,b) => {return a / b};
    const multiply  = (a,b) => {return a * b};
    return {add, subtract, divide, multiply}; 
}

const lowerAlphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
]
const upperAlphabet = [
    'A', 'B', 'C', 'D', 'E', 
    'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 
    'Z'
]

export const cesarCipher = (string, cipherNumber) => {
    let cesarString = '';
    for (let i = 0; i < string.length; i++) {
        if (lowerAlphabet.includes(string[i])) {
            cesarString += cypherizeLetter(string[i], cipherNumber, "lower");
        } else if(upperAlphabet.includes(string[i])) {
            cesarString += cypherizeLetter(string[i], cipherNumber, "upper");
        } else {
            cesarString += string[i];
        }
    }
    return cesarString;
}

const cypherizeLetter = (letter, cipherNumber, letterCase) => {
    let newIndex;
    let newLetter;
    if (letterCase === 'lower') {
        newIndex = lowerAlphabet.indexOf(letter) + cipherNumber;
        if (newIndex < 0) {
            newLetter = lowerAlphabet[newIndex + lowerAlphabet.length];
        } else if (newIndex >= lowerAlphabet.length) {
            newLetter = lowerAlphabet[lowerAlphabet.length - newIndex];
        } else {
            newLetter = lowerAlphabet[newIndex];
        }
    } else if (letterCase === 'upper') {
        newIndex = upperAlphabet.indexOf(letter) + cipherNumber;
        if (newIndex < 0) {
            newLetter = upperAlphabet[newIndex + upperAlphabet.length];
        } else if (newIndex >= lowerAlphabet.length) {
            newLetter = lowerAlphabet[lowerAlphabet.length - newIndex];
        } else {
            newLetter = upperAlphabet[newIndex];
        }
    } 
    return newLetter;
}