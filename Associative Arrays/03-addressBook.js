function addressBook(input) {

    let infomartion = {};

    for (let line of input) {
        let [name, address] = line.split(':')

        infomartion[name] = address;
    }

    let entries = Object.entries(infomartion);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of entries) {
        let [name, address] = el;
        console.log(`${name} -> ${address}`);
    }



}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);