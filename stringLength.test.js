const stringLength = require('./stringLength');

test('returns the string length', () => {
    expect(stringLength("Sumon")).toBe(5);
});

test('check if string length is at least 1 and not longer than 10', () => {
    expect(stringLength("Sumon")).toBeGreaterThan(1);
    expect(stringLength("Sumon")).toBeLessThan(11);
});