function integerAndFloat(num1, num2, num3) {

    let total = num1 + num2 + num3;
    total % 1 === 0 ? total += ' - Integer' : total += ' - Float';
    console.log(total);
}
integerAndFloat(100, 200, 303);