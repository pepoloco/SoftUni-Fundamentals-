function storeProvision(currentStock, orderForDelivery) {

    const store = {};


    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        store[product] = Number(currentStock[i + 1]);
    }

    for (let y = 0; y < orderForDelivery.length; y += 2) {
        const deliveryProduct = orderForDelivery[y];
        if (!store.hasOwnProperty(deliveryProduct)) {
            store[deliveryProduct] = 0;
        }
        store[deliveryProduct] += Number(orderForDelivery[y + 1]);
    }
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);