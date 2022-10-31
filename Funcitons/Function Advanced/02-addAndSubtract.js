function main(first, second, third){

    

    function sum(first,second){
        return first + second
    }
    function subtracted(sum,thirdNumber){
        return sum - third
    }
   
    let sumFirstAndSecond = sum(first,second);
   
    console.log(subtracted(sumFirstAndSecond,third))

    

}
main(23,6,10);