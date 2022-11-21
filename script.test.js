import {
    capitalize, reverseString, calculator
} from './script.js';

test('adds 1 + 2 to equal 3', () => {
    expect(script(1, 2)).toBe(3);
});

test('capitalize first letter of string only', () => {
    expect(capitalize("plymouth")).toBe("Plymouth");
});

test('string reversal', () => {
    expect(reverseString("string")).toBe("gnirts");
});

test('add 1 and 1', () => {
    expect(calculator.add(1,1).toBe(2));
});

test('subtract 1 and 1', () => {
    expect(calculator.subtract(1,1).toBe(0));
});

test('divide 1 and 1', () => {
    expect(calculator.divide(1,1).toBe(1));
});

test('multiply 1 and 1', () => {
    expect(calculator.multiply(1,1).toBe(1));
});