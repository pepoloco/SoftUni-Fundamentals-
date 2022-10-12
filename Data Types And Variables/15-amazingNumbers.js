function amazingNumbers(number) {

    number = number.toString();
    let result = 0;

    for (let i = 0; i < number.length; i++) {
        result += Number(number[i]);
    }
    let sum = result.toString().includes('9');
    console.log(sum ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(999);