function factorialDivision(firstNum, secondNum) {
    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(factorialDivision(5,2));

// function solve(a, b) {
//     let firstNum = Number(a);
//     let secondNum = Number(b);
//     let firstF = factorial(firstNum);
//     let secondF = factorial(secondNum);
//     let difference = divideNums(firstF, secondF);
//     console.log(difference.toFixed(2));

//     function factorial(num) {
//         let result = 1;
//         for (let i = 1; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
//     function divideNums(firstF, secondF) {
//         let result = firstF / secondF;
//         return result;
//     }
// }

// solve(5, 2);