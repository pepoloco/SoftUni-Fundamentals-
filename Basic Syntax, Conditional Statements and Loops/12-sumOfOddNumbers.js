function sumOfOddNumbers(number){

let oddNumber = 1;
let totalSum = 0;

for (let i = 0; i < number; i++){
    console.log(oddNumber);
    totalSum += oddNumber;
    oddNumber += 2;
}
console.log(`Total: ${totalSum}`);
}
sumOfOddNumbers(5);