function numbers(numbers) {

    let arr = numbers.split(' ');

    let arrNums = [];
    let sum = 0;
    let greaterNums = [];
    for (let chars of arr) {
        let currNum = Number(chars);
        arrNums.push(Number(chars));
        sum += currNum;
    }
    let avg = sum / arrNums.length
    for (let chars of arr) {
        if (avg < chars) {
            greaterNums.push(Number(chars));
        }
    }
    if (avg === arrNums.length){
        console.log('No');
    }
    let copyOfGreaterNums = greaterNums.slice();
    let descenting = copyOfGreaterNums.sort((a,b) => b - a);
    console.log(descenting.splice(0,5).join(' '));
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');