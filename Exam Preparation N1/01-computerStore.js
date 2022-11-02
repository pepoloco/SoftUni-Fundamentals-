function computerStore(input) {

    let priceWoTax = 0;

    let index = 0;
    let command = input[index];
    index++;
    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        let priceForParts = Number(command)
        if (priceForParts < 0) {
            console.log('Invalid price!');
            command = input[index];
            index++;
            continue;
        }
        priceWoTax += priceForParts;
        command = input[index];
        index++;
    }
    let taxes = priceWoTax * 1.2 - priceWoTax;
    let totalPrice = (priceWoTax + taxes);
    if (command === 'special') {
        totalPrice *= 0.90;
    }
    if (totalPrice == 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWoTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------')
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
);
computerStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
);
computerStore(([
    'regular'
])
);