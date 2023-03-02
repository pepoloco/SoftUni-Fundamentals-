function solve(arr) {
    let pw = arr.shift();

    for (let command of arr) {
        if (command === 'Done') {
            break;
        }
        let [action, arg1, arg2] = command.split(' ');
        if (action === 'TakeOdd') {
            pw = pw
                .split('')
                .filter((_, i) => i % 2 !== 0)
                .join('');
            console.log(pw);
        } else if (action === 'Cut') {
            let index = +arg1;
            let length = +arg2;
            let substr = pw.substr(index, length);
            pw = pw.replace(substr, '');
            console.log(pw);
        } else if (action === 'Substitute') {
            let substr = arg1;
            let substritute = arg2;
            if (pw.includes(substr)) {
                while (pw.includes(substr)) {
                    pw = pw.replace(substr, substritute);
                }
                console.log(pw);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }
    console.log(`Your password is: ${pw}`);
}
solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));