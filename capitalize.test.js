const capitalize = require("./capitalize");
const stringLength = require("./stringLength");

describe('Test Of Capitalization', () => {
    test('Capitalizing first letter', () => {
        expect(capitalize("droidvirus")).toBe("Droidvirus");
    });
});