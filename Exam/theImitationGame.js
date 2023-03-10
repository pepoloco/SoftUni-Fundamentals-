function solve(arr) {
    let string = arr.shift();
    let commands = arr.shift();
    while (commands !== "Decode") {
        let [instruction, str1, str2] = commands.split('|')
        if (instruction === 'ChangeAll') {
            while (string.includes(str1)) {
                string = string.replace(str1, str2);
            }
        } if (instruction === "Insert") {
            string = string.slice(0, +str1) + str2 + string.slice(str1);

        } if (instruction === 'Move') {
            let firstPart = string.slice(0, +str1);
            string = string.slice(+str1) + firstPart;
        }
        commands = arr.shift();
    }

    console.log(`The decrypted message is: ${string}`);

}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);