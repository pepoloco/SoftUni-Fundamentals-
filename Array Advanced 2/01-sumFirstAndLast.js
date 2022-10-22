function sumFirstAndLast(array) {

    let copyArray = [];
    for (let el of array) {
        copyArray.push(el);
    }
    let firstNum = Number(copyArray.shift());
    let lastNum = Number(copyArray.pop());
    let sum = firstNum + lastNum;
    console.log(sum);

}
sumFirstAndLast(['20', '30', '40']);