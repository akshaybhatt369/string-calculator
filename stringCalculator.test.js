const add = require('./stringCalculator')

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

    test('returns same number', () => {
    expect(add('5000')).toBe(5000);
  });
})