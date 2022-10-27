function sortAnArrayBy2Criteria(array) {

    let copyOfArray = array.slice()

    let sortedArray = copyOfArray.sort((a, b) => {
        return a.length - b.length || a.localeComapre(b);
    });

    sortedArray.forEach(element => {
        console.log(element);
    });



}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])