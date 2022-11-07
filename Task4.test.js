const reverse = require('./Task4')

test('hello backwards is olleh', () => {
    expect(reverse.reverser("hello world")).toBe("dlrow olleh");
});