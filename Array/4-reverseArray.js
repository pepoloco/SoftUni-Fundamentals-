function reverseArray(array) {

    let k = array.length - 1;
    for(let i = 0; i < array.length / 2; i++, k--){
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    console.log(array.join(' '));
}
reverseArray(['a', 'b', 'c', 'd', 'e']);