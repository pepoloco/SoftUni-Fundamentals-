function orders(product, quantity) {

    let outcome = 0;

  switch(product){
    case('coffee'): outcome = quantity * 1.50; break;
    case('water'): outcome = quantity * 1.00; break;
    case('coke'):  outcome = quantity * 1.40; break;
    case('snacks'): outcome = quantity * 2.00; break;
  }

  console.log(outcome.toFixed(2));

}
orders("water", 5);
orders("coffee", 2);