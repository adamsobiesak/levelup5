const fib = require('./fib');

it('return fibonacci sequence', () => {
  expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});
it('num is not natural number', () => {
  expect(fib(0.1)).toBeFalsy();
});
it('num can not be negative', () => {
  expect(fib(-1)).toBeFalsy();
});
it('num is not a number', () => {
  expect(fib("liczba")).toBeFalsy();
});
it('return an array', () => {
  expect(Array.isArray(fib(10))).toBe(true);
});
