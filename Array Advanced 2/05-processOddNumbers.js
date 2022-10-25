function processOddNumbers(numbers) {

    let filteredElements = numbers.filter((el, i) => i % 2 == 1);

    let multipliedByTwo = filteredElements.map((x) => x * 2);
    let reversed = multipliedByTwo.reverse();
    console.log(reversed.join(' '));
}
processOddNumbers([10, 15, 20, 25]); 