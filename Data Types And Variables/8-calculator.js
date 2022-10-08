function calculator(number, operator, number2) {

    let sum = 0;

    switch (operator) {
        case ('+'): sum = number + number2; break;
        case ('-'): sum = Math.abs(number - number2); break;
        case ('/'): sum = number / number2; break;
        case ('*'): sum = number * number2; break;
    }

    console.log(sum.toFixed(2));

}
calculator(5, '+', 10);