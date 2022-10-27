function searchForANumber(arr1, arr2) {

    let count = 0;
    let numsNeeded = arr2[0];
    let toDelete = arr2[1];
    let numsToFind = arr2[2];

    let newArr = [];

    newArr = arr1.slice(0, numsNeeded);
    newArr = newArr.splice(toDelete);

    newArr.forEach((el) => {
        finding(el, numsToFind) ? count++ : null
    })

    function finding(el, numsToFind) {
        numsToFind += ''; el += '';
        return el.includes(numsToFind);
    }

    console.log(`Number ${numsToFind} occurs ${count} times.`);

}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);