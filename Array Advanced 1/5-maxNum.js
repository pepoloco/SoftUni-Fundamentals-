function maxNum(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let isTrue = true;

        for (let x = i + 1; x < array.length; x++) {
            let currentNum2 = array[x]

            if (currentNum <= currentNum2) {
                isTrue = false;
            }
        }
        if (isTrue) {
            newArray.push(currentNum);
        }
    }
    console.log(newArray.join(' '));

}
maxNum([1, 4, 3, 2]);