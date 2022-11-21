export function script(a, b) {
    return a + b;
}

export function capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1, str.length).toLowerCase();
}