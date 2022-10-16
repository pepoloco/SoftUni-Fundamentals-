function condenseArrayToNumber(array){
    let copy = [];
    for (let el of array){
        copy.push(el);
    }
    while(copy.length > 1){
        let tempArray = [];
        for (let i = 0; i < copy.length - 1; i++){
            tempArray[i] = copy[i] + copy[i + 1];
        }
        copy = tempArray;
    }
    console.log(copy.toString());
}
condenseArrayToNumber([2,10,3]);