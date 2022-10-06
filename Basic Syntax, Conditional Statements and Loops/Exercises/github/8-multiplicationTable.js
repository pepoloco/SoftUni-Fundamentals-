function multiplicationTable(number) {

    for (let index = 1; index <= 10; index++) {
        let sum = number * index;
        console.log(`${number} X ${index} = ${sum} `);
    }

}
multiplicationTable(5);