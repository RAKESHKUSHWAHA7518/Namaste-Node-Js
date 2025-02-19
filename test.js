const { multiply } = require('./async');

describe('multiply function', () => {
it('should return the correct product when multiplying two positive integers', () => {
  const result = multiply(5, 7);
  expect(result).toBe(35);
});
});
