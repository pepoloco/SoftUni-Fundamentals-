function evenOddSubtraction(array){

    let difference = 0;
    let evenNums = 0;
    let oddNums = 0;
    
    
    for(let i = 0; i < array.length; i++){
        let tempNumb = (array[i]);
        if (Number(tempNumb) % 2 === 0){
            evenNums += tempNumb;
        }else {
            oddNums += tempNumb;
        }
    }
    difference = (evenNums - oddNums);
    console.log(difference);
    }
    evenOddSubtraction([1,2,3,4,5,6]);