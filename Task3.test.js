const Calculator = require('./Task3')

test('2^3 equals 8', () => {
    expect(Calculator.power(2,3)).toBe(8);
});

test('ceil 2.7 equals 3', () => {
    expect(Calculator.ceil(2.7)).toBe(3);
});

test('rounding 2.7 is 3', () => {
    expect(Calculator.round(2.7)).toBe(3);
});
    
    