function triplesLatinLetters(number) {

    for (let i = 0; i < number; i++) {
        let first = String.fromCharCode(97 + i);
        for (let x = 0; x < number; x++) {
            let second = String.fromCharCode(97 + x);
            for (let y = 0; y < number; y++) {

                let third = String.fromCharCode(97 + y);

                console.log(`${first}${second}${third}`);
            }
        }
    }

}
triplesLatinLetters('2');