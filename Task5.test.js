const present = require('./Task5')

test('Is 5 present in [1,2,3,4,5]', () => {
    expect(present.present([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],5)).toBe(true);
});

test('Is 6 present in [1,2,3,4,5]', () => {
    expect(present.present([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],21)).toBe(false);
});