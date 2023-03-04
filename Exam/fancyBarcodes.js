'use strict'
function solve(input) {
    const numberOfBarcodes = input.shift();
    const pattern = /([@#]+)(?<product>[A-Z][a-zA-Z\d]{4,})(@#{1,})/gm
    for (let i = 0; i < numberOfBarcodes; i++) {
        let barcode = input[i];
        let x = '';
        let isValid = false
        let match = pattern.exec(barcode)
        while (match !== null) {
            isValid = true
            let barcodeText = match[2];
            for (let el of barcodeText) {
                if (!isNaN(+(el))) {
                    x += el
                }
            }
            match = pattern.exec(barcode);
        }
        if (isValid) {
            x = x !== "" ? x : '00';
            console.log(`Product group: ${x}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
