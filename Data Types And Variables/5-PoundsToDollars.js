function poundsToDollars(num) {

    const britPound = 1.31; //1 pound to dollar
    let convert = britPound * num;
    console.log((convert).toFixed(3));

}
poundsToDollars(39);