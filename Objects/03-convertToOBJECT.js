function solve(input) {
    let toObject = JSON.parse(input);

    for (let el of Object.keys(toObject)) {
        console.log(`${el}: ${toObject[el]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');