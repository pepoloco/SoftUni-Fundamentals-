function equalArr(array, array1) {

    let array1Sum = 0;
    let array2Sum = 0;
    let isEqual = true;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        array1Sum += Number(array[i]);
    }
    for (let y = 0; y < array1.length; y++) {
        array2Sum += Number(array1[y]);
    }
    for (let x = 0; x < array.length; x++) {
        sum += Number(array[x]);
        if (array[x] !== array1[x]) {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${x} index`)
            break;
        }
    }
    if (array1Sum === array2Sum) {
        console.log(`Arrays are identical. Sum: ${array1Sum}`);
    }
}
equalArr(['10', '20', '30'], ['10', '20', '30']);
equalArr(['1'], ['10']);