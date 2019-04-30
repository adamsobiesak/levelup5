function fib(num, a = 1, b = 0) {
    if (num === 0) {
      return b;

    } else if (typeof num != 'number') {
    return;

    } else if (num < 0) {
    return;
   
    } else if (num % 1 !== 0) {
    return;
    
    } else {
        let arr = [0, 1];
        for (let i = 2; i < num + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }
        return arr;
    }
  };
  module.exports = fib;
