const reverseString = require("./reverseString");

test('Check if the string is reversed or not', () => {
    expect(reverseString('Sumon')).toBe('nomuS');
});