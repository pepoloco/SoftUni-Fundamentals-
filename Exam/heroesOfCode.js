function solve(arr) {
    let heroesNum = arr.shift();
    let heroes = {};

    while (heroesNum > 0) {
        let [heroName, mp, hp] = arr.shift().split(' ')
        heroes[heroName] = {
            mp: +mp,
            hp: +hp,
        };
        heroesNum--;
    };

    const castSpell = function (heroName, mpNeed, spellName) {
        mpNeed = +(mpNeed);
        if (heroes[heroName].mp - mpNeed > 0) {
            heroes[heroName].mp -= mpNeed;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        };
    };
    const heal = function () {

    };
    const recharge = function (heroName, amount) {
        amount = +(amount);
        heroName[heroName].mp = 200;
        console.log(`${heroName} recharged for ${amount}`);
    };
    const takeDamage = function (heroName, damage, attacker) {
        damage = +(damage);
        if (heroes[heroName].hp - damage > 0) {
            heroes[heroName].hp -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    };

    let command = arr.shift();

    while (command !== 'End') {
        let action = command.split(' - ');
        switch (action[0]) {
            case 'CastSpell':
                castSpell(action[1], action[2], action[3]);
                break;
            case 'TakeDamage':
                takeDamage(action[1], action[2], action[3]);
                break;
            case 'Recharge':
                recharge(action[1], action[2]);
                break;
            case 'Heal':
                heal(action[1], action[2]);
                break;
        }
        command = arr.shift();
    }
    let nameSort = Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0]));
    let hpSort = nameSort.sort((a, b) => b[1].hp - a[1].hp);


    for (let kvp of hpSort) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].hp}`);
        console.log(`  MP: ${kvp[1].mp}`);
    }
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

