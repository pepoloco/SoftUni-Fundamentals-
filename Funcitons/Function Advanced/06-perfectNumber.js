
function perfectNum(number) {

    let sumOfDivisors = 1;

    for (let currentNumber = 2; currentNumber < number; currentNumber++){
        if (number % currentNumber === 0){
            sumOfDivisors += currentNumber;
        }
    }

    if (sumOfDivisors === number){
        console.log('We have a perfect number!');
    }else {
        console.log("It's not so perfect.");
    }
}
perfectNum(6);