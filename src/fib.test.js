const fib = require('./fib');

it('return fibonacci number', () => {
  expect(fib(3)).toBe(2);
});
it('num is not natural number', () => {
  expect(fib(0.1)).toBeFalsy();;
});
it('num can not be negative', () => {
  expect(fib(-1)).toBeFalsy();;
});
it('num is not a number', () => {
  expect(fib("liczba")).toBeFalsy();;
});