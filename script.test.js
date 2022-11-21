import {
    capitalize, reverseString, calculator,
    cesarCipher
} from './script.js';

test('capitalize first letter of string only', () => {
    expect(capitalize("plymouth")).toBe("Plymouth");
});

test('string reversal', () => {
    expect(reverseString("string")).toBe("gnirts");
});

test('add 1 and 1', () => {
    expect(calculator().add(1,1)).toBe(2);
});

test('subtract 1 and 1', () => {
    expect(calculator().subtract(1,1)).toBe(0);
});

test('divide 1 and 1', () => {
    expect(calculator().divide(1,1)).toBe(1);
});

test('multiply 1 and 1', () => {
    expect(calculator().multiply(1,1)).toBe(1);
});

test('cesarCipher z to a', () => {
    expect(cesarCipher('z',1)).toBe('a');
});

test('cesarCipher a to z', () => {
    expect(cesarCipher('a',-1)).toBe('z');
});

test('cesarCipher maintain capital letters', () => {
    expect(cesarCipher('AbCdEfG', 1)).toBe('BcDeFgH');
});

test('cesarCipher maintain punctuation', () => {
    expect(cesarCipher('Also, test for puncation!', 1)).toBe('bmtp, uftu gps qvoduvbujpo!');
});