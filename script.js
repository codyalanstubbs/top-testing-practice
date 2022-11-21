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