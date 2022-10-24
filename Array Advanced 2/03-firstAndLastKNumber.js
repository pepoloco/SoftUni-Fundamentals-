function firstAndLastKNumbers(array) {

    let k = array.shift();;


    let firstNums = array.slice(0, k);
    let lastNums = array.slice(-k);
    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);