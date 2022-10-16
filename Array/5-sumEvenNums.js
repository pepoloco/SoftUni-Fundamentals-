function sumEvenNum(array){
    let sum = 0;
    for (let i = array.length; i >= 0; i--){
        let currentNum = Number(array[i]);
        if (currentNum % 2 === 0){
            sum += currentNum;
        } else if ( currentNum % 2 != 0){
            sum += 0;
        }
    }
    console.log(sum);
}
sumEvenNum(['1','2','3','4','5','6']);