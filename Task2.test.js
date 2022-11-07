const Task2 = require('./Task2')

test('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. (3+5+6+9)', () => {
    expect(Task2.sumOfMultiples(3,5,10)).toBe(23);
});