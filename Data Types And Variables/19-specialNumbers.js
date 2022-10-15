function specialNumbers(number){
    
    let sum = 0;
    let result = '';

    
    for(let index = 1; index <= number; index++){
        index = index.toString();
        for (let x = 0; x < index.length; x++){
            sum += Number(index[x]);
        }
        result =
        sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${index} -> True` : `${index} -> False`);
        sum = 0;
    }

}
specialNumbers(15)