function simpleCalculator(numOne, numTwo, operator) {

    let result;


   switch(operator){
    case 'multiply' : result = (numOne, numTwo) => numOne * numTwo; break;
    case 'divide' : result = (numOne, numTwo) => numOne / numTwo; break;
    case 'add' :    result = (numOne, numTwo) => numOne + numTwo; break;
    case 'subtract' : result = (numOne, numTwo) => numOne - numTwo; break;
   }

   console.log(result(numOne, numTwo));

}
simpleCalculator(5,5,'multiply');
simpleCalculator(40,8, 'divide');
simpleCalculator(12,19, 'add');
simpleCalculator(50, 13, 'subtract');