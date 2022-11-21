export function script(a, b) {
    return a + b;
}

export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}