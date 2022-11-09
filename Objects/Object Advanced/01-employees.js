function employees(data) {

    let person = {};

    data.forEach(el => {
        person[el] = el.length;
    });

    for (const key in person) {
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);