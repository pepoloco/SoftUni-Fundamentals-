function solve(input) {

    let pattern = /\+359([ -])[2]\1\d{3}\1\d{4}\b/g

    let valid = input.shift()
    let validResult = valid.match(pattern);


    console.log(validResult.join(', '));
}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);