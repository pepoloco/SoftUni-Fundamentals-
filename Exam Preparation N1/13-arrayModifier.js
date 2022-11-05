function arrayMod(input) {

    let innitialArrayValues = input
        .shift()
        .split(' ')
        .map(Number);
    let command = input.shift();

    while (command !== "end") {
        let splittedCommand = command.split(' ');
        let action = splittedCommand.shift();
        let i1 = +splittedCommand.shift();
        let i2 = +splittedCommand.shift();

        if (action === 'swap') {
            let f1 = innitialArrayValues[i1];
            let f2 = innitialArrayValues[i2];
            innitialArrayValues[i1] = f2;
            innitialArrayValues[i2] = f1;
        } else if (action === 'multiply') {
            innitialArrayValues.splice(i1, 1, innitialArrayValues[i1] * innitialArrayValues[i2]);
        } else if (action === 'decrease') {
            innitialArrayValues = innitialArrayValues.map(el => el - 1);
        }
        command = input.shift();
    }
    return innitialArrayValues.join(', ');
}
console.log(arrayMod([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]));
