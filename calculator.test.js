const Calculator = require("./calculator");

let calc = new Calculator(6, 3);

describe ('test my calculator', () => {
    test('add functionality', () => {
        expect(calc.add()).toBe(9);
    });

    test('subtract functionality', () => {
        expect(calc.subtract()).toBe(3);
    });

    test('multiply functionality', () => {
        expect(calc.multiply()).toBe(18);
    })

    test('divide functionality', () => {
        expect(calc.divide()).toBe(2);
    })
})

