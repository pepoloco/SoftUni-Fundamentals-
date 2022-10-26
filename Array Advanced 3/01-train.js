function train(array) {

    let numberOfPassengersInsideAWagon = array.shift().split(' ').map(Number);

    let maxCapacity = Number(array.shift(1));

    let lengthArr = array.length
    for (let i = 0; i < lengthArr; i++) {
        let command = array[i].split(' ');
        if (command[0] == 'Add') {
            numberOfPassengersInsideAWagon.push(Number(command[1]));
        } else {
            for (let y = 0; y < numberOfPassengersInsideAWagon.length; y++) {
                if (Number(command[0]) + numberOfPassengersInsideAWagon[y] <= maxCapacity) {
                    numberOfPassengersInsideAWagon[y] += Number(command[0]);
                    break;
                }
            }

        }
    }
    console.log(numberOfPassengersInsideAWagon.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);