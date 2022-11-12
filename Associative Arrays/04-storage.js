function storage(data) {

    let object = {};

    data.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (!object[product]) {
            object[product] = quantity;
        } else {
            object[product] += quantity;
        }
    });
    let arrayedObj = Object.entries(object).map(([key, value]) => `${key} ${value}`);

    for (const el of arrayedObj) {
        let [item, quantity] = el.split(' ');
        console.log(`${item} -> ${quantity}`);
    }
   
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);

////////////////////////////////////////////////////////////////

let displayStock = (data) => Object.entries(data).map(([k, v]) => `${k} ${v}`)

function storage(data) {

    let object = {};

    data.forEach(line => {
        let [product, quantity] = line.split(' ');
        object[product] = (object[product] || 0) + Number(quantity)
    });
    return object;
}
let stock = storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);

console.log(displayStock(stock));

////////////////////////////////////////////////////////////////

function problem(info) {

    let storage = new Map();

    for (const el of info) {
        let [product, quantity] = el.split(' ');
        if (!storage.has(product)) {
            storage.set(product, quantity);
        }
        else {
            let currentQuantity = storage.get(product);
            let newQuantity = Number(currentQuantity) + Number(quantity);
            storage.set(product, newQuantity);
        }
    }

    for (let [key, quantity] of [...storage.entries()]) {
        console.log(`${key} -> ${quantity}`);
    }
}
problem(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
