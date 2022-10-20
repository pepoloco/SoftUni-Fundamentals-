function addSubtract(array) {


    let sumOriginalArr = 0;
    let arrayLength = array.length
    let sumCopyArr = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = array[i];
        sumOriginalArr += array[i];
        if (currentNum % 2 === 0) {
            array[i] += i
        } else if (currentNum % 2 != 0) {
            array[i] -= i;
        }
        sumCopyArr += array[i];
    }
    console.log(array);
    console.log(sumOriginalArr);
    console.log(sumCopyArr);
}
addSubtract([5, 15, 23, 56, 35]);