function primeNumberChecker(number){

    if (number % number === 0 && number % 1 === 0){
        return true;
    }else {
        return false;
    }


}
let number = primeNumberChecker(8);
console.log(number);