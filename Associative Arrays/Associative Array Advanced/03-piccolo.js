function piccolo(data) {

    const object = {};


    for (const word of data) {
        let [direction, carNumber] = word.split(', ');

        if (direction === 'IN') {
            object[carNumber] = "parked";
        } else if (direction === "OUT") {
            delete object[carNumber];
        }
    }

    let sorted = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (const el of sorted) {
            console.log(el[0]);
        }
    }


}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);