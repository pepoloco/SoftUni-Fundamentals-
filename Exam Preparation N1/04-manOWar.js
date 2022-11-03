function manOWar(input) {

    let index = 0;
    let pirateShip = input[index].split('>').map(Number);
    index++;
    let warShip = input[index].split('>').map(Number);
    index++;
    let maximumHealthOfTheShip = input[index];
    index++;
    let data = input[index];
    index++;
    let damage = 0;
    let health = 0;
    let finish = false;

    while (data !== 'Retire') {
        let operation = data.split(' ');
        let i;
        switch (operation[0]) {
            case ('Fire'):
                i = Number(operation[1]);
                damage = Number(operation[2]);
                if (i < 0 || i > warShip.length - 1) {
                    data = input[index];
                    index++;
                    continue;
                }
                warShip[index] -= damage;
                if (warShip[i] <= 0) {
                    finish = true;
                    console.log('You won! The enemy ship has sunken.');
                }
                break;
            case ('Defend'):
                i = Number(operation[1]);
                let endIndex = Number(operation[2]);
                damage = Number(operation[3]);
                if (i < 0 || i > pirateShip.length - 1 || endIndex > pirateShip.length || endIndex < 0) {
                    data = input[index];
                    index++;
                    continue;
                }
                for (let x = i; x <= endIndex; x++) {
                    pirateShip[x] = pirateShip[x] - damage;
                    if (pirateShip[x] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        finish = true;
                        break;
                    }
                }
                break;
            case ('Repair'):
                i = Number(operation[1]);
                health = Number(operation[2]);
                if (i < 0 || i > pirateShip.length - 1) {
                    operation = input[index];
                    index++;
                    continue;
                }
                if (pirateShip[i] + health <= maximumHealthOfTheShip) {
                    pirateShip[i] = pirateShip[i] + health;
                } else {
                    pirateShip[i] = maximumHealthOfTheShip;
                }
                break;
            case ('Status'):
                let breakPoint = maximumHealthOfTheShip * 0.20;
                let result = pirateShip.filter((char) => char < breakPoint);
                console.log(`${result.length} sections need repair.`);
                break;
        }
        data = input[index];
        index++;
        if (finish) {
            break;
        }
    }

    let pirateShipResult = 0;
    let warShipResult = 0;
    for (let section of warShip) {
        warShipResult += section;
    }
    for (let section of pirateShip) {
        pirateShipResult += section;
    }
    if (!finish) {
        console.log(`Pirate ship status: ${pirateShipResult}`);
        console.log(`Warship status: ${warShipResult}`);
    }
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
