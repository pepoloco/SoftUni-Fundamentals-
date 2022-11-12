function phoneBook(input) {

    let information = {};

    for (const person of input) {
        let [name, phone] = person.split(' ');
        information[name] = phone;
    }
    for (let el in information){
        console.log(`${el} -> ${information[el]}`);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);