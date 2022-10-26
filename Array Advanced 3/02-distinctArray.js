function distinctArray(numbers) {

    let copyOfNumbers = [];
    copyOfNumbers = numbers.slice();
    let numberLength = numbers.length;
    let newArray = [];

    for (let i = 0; i < numberLength; i++) {
        let currentNum = numbers[i];

        if (!newArray.includes(currentNum)) {
            newArray.push(currentNum);
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);