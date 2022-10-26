function sorting(array) {

    let copyArr = array.slice();

    let sorted = copyArr.sort((a, b) => {
        return a - b
    });

    let sortedBigSmall = [];
    while (sorted.length != 0) {
        sortedBigSmall.push(sorted[sorted.length - 1]) && sorted.pop();
        sortedBigSmall.push(sorted[0]) && sorted.shift();
    }
    console.log(sortedBigSmall.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);