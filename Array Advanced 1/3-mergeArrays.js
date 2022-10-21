function commonElements(array1, array2) {

    let mergedArray = [];
    let ar1Lenght = array1.length;


    for (let i = 0; i < ar1Lenght; i++) {
        if (i % 2 === 0) {
            mergedArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            mergedArray.push(array1[i] + array2[i]);
        }
    }

    console.log(mergedArray.join(' - '));
}
commonElements(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);