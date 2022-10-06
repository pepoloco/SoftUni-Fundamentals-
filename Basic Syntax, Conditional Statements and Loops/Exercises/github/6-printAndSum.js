function printAndSum(start, end) {
    let sum = 0;
    let print = '';

    for (let cNum = start; cNum <= end; cNum++) {
        sum += cNum;
        print += `${cNum} `
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);