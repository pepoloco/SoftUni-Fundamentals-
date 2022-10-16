function reverseAnArrayOfNumbers(n,array){

    let result = []; // nov masiv

    for(let r = n - 1; r >= 0; r--){ 
        result.push(array[r]); // pushvame v noviqt masiv ot purviqt chislata na obratno;
    }
    console.log(result.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);