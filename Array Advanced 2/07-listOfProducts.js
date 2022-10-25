function listOfProducts(arr) {

    let sorted = arr.sort()
    let list = [];
    let item;

    for (let i = 0; i < sorted.length; i++) {
        item = sorted[i];
        list.push(`${i + 1}.${item}`)
    }

    return list.join('\n')

}
console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
