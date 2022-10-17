
function commonElements(array1, array2) {

    let ar1Length = array1.length;
    let ar2Length = array2.length;

    for (let i = 0; i < ar1Length; i++) {
        let buffer = array1[i];
        for (let y = 0; y < ar2Length; y++) {
            let buffer2 = array2[y];

            if (buffer !== buffer2) {
                continue;
            } else {
                console.log(buffer);
            }
        }

    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);