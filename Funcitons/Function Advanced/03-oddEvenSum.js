function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numAsString = number.toString();

    for (let el of numAsString) {
        let currentNum = Number(el)
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
oddAndEvenSum(1000435);