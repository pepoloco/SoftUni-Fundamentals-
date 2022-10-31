function palindrome(array){

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++){
        let current = array[i];
        let palidromeNum = current.toString().split('').reverse().join('');
        let convertTonum = Number(palidromeNum);
        
        if (current === convertTonum){
            console.log(true);
        }else{
            console.log(false);
        }
    }


}
palindrome([123,323,421,121]);