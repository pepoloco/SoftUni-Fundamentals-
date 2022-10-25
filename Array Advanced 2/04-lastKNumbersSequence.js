function lastKNumbersSequence(n, k) {

   let array = [1];
   let firstElement = 1;

   for (let i = 1; i <= n - 1; i++) {
      let currentSum = array.slice(-k);
      let sum = 0;
      for (el of currentSum) {
         sum += el
      }
      array.push(sum);
   }
   console.log(array.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);