function bakery(input) {
  let lines = input.shift().split(" ");
  let [command, quantity, food] = lines;
  let stock = {};
  let soldFoodQuantity = 0;
  function receive(quantity, food) {
    if (quantity <= 0) {
      return;
    }
    if (!stock.hasOwnProperty(food)) {
      stock[food] = 0;
    }
    stock[food] += +quantity;
  }
  function sell(quantity, food) {
    if (!stock.hasOwnProperty(food)) {
      console.log(`You do not have any ${food}`);
      return;
    }
    if (stock[food] <= 0 || stock[food] < quantity) {
      console.log(
        `There aren't enough ${food}. You sold the last ${stock[food]} of them.`
      );
      stock[food] = 0;
      return;
    }
    stock[food] -= +quantity;
    console.log(`You sold ${quantity} ${food}.`);
    soldFoodQuantity += +quantity;
  }
  function printStock() {
    let stockAvailability = Object.entries(stock)
      .filter(([food, quantity]) => quantity > 0)
      .map(([food, quantity]) => `${food}: ${quantity}`)
      .join("\n");
    console.log(stockAvailability);
  }
  while (lines !== "Complete") {
    if (command === "Receive") {
      receive(quantity, food);
    }
    if ((command === "Sell")) {
      sell(quantity, food);
    }
    lines = input.shift().split(" ");
    if (lines[0] === "Complete") {
      break;
    } else {
      [command, quantity, food] = lines;
    }
  }

  printStock();
  console.log(`All sold: ${soldFoodQuantity} goods`);
}
bakery([
  "Receive 105 cookies",
  "Receive 10 donuts",
  "Sell 10 donuts",
  "Sell 1 bread",
  "Complete",
]);

bakery([
  "Receive 10 muffins",
  "Receive 23 bagels",
  "Sell 5 muffins",
  "Sell 10 bagels",
  "Complete",
]);
