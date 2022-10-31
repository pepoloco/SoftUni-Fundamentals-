function nxnMatrix(n) {
    let array = [];
    let rowGenerator = () => {
        let singleRow = '';
        for (let y = 0; y < n; y++) {
            singleRow += `${n} `;
        }
        return singleRow;
    };

    for (let i = 0; i < n; i++) {
        array.push(rowGenerator());
        console.log(rowGenerator());
    }
}
nxnMatrix(3);