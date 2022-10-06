function triangleOfNumbers(number) {


  for (let row = 1; row <= number; row++) {

    let print = '';

    for (let space = 1; space <= row; space++) {
      print += `${row} `;
    }
    console.log(print);
  }

}
triangleOfNumbers(3)