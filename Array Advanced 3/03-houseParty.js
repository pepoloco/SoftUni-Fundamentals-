function houseParty(array) {

    let goingList = [];

    for (let i = 0; i < array.length; i++) {
        let [name, , operation] = array[i].split(' ');


        if (operation === 'going!') {
            if (goingList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                goingList.push(name);
            }
        } else {
            if (!goingList.includes(name)) {
                console.log(`${name} is not in the list!`);
            }
            else {
                let index = goingList.indexOf(name);
                goingList.splice(index, 1);
            }
        }
    }
    console.log(goingList.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])