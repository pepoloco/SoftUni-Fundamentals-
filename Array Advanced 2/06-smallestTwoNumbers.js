function smallestTwoNumbers(numbers) {

    let sortedNums = numbers.sort((a, b) => a - b);
    let slicedNums = sortedNums.slice(0, 2);

    console.log(slicedNums.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);