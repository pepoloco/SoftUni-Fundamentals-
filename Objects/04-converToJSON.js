function solve(firstName, lastName, hairColor) {

    let object = {}
    object.firstName = firstName;
    object.lastName = lastName;
    object.hairColor = hairColor;
    console.log(JSON.stringify(object));
    return object;

}
solve('George', 'Jones', 'Brown');