const Calculator = require('./Calculator')

test('subtract 2 - 2 to equal 0', () => {
expect(Calculator.subtract(2,2)).toBe(0);
});

test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.sum(1,2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
    expect(Calculator.multiply(2,2)).toBe(4);
});

test('divide 2/2 to equal 1', () => {
    expect(Calculator.divide(2,2)).toBe(1);
});
    
test('divide 2/0 to equal error', () => {
        expect(Calculator.divide(2,0)).toBe("Infinite answer");
});