function sumDigits(number) {

    let numAsString = String(number);
    let sum = 0;

    for (let index = 0; index < numAsString.length; index++) {
        let currentNum = Number(numAsString[index]);
        sum += currentNum;
    }
    console.log(sum);

}
sumDigits(245678);