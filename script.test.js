import {
    script, capitalize
} from './script.js';

test('adds 1 + 2 to equal 3', () => {
    expect(script(1, 2)).toBe(3);
});

test('capitalize first letter of string only', () => {
    expect(capitalize("plymouth")).toBe("Plymouth");
});