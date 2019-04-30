function fib(num, a = 1, b = 0) {
    if (num === 0) {
      return b;

    } else if (typeof num != 'number') {
        console.log('num is not a number');
    return;

    } else if (num < 0) {
        console.log('num can not be negative');
    return;
   
    } else if (num % 1 != 0) {
    console.log('num is not a natural number');
    return;
    } else {
      return fib(num - 1, a + b, a);
    }
  }
  module.exports = fib;
