function solve(arr) {

    let numOfHeroes = arr.shift();
    let heroes = {};
    while (numOfHeroes > 0) {
        let [heroName, hp, mp] = arr.shift().split(' ')
        heroes[heroName] = { hp: +hp, mp: +mp }
        numOfHeroes--;
    }
    let command = arr.shift();

    while (command !== 'End') {
        let [action, heroName, arg1, arg2] = command.split(' - ');
        switch (action) {
            case ('CastSpell'): castSpell(heroName, arg1, arg2); break;
            case ("TakeDamage"): takeDamage(heroName, arg1, arg2); break;
            case ("Recharge"): recharge(heroName, arg1); break;
            case ("Heal"): heal(heroName, arg1); break;
        }


        command = arr.shift();
    }
    function castSpell(name, mp, spell) {
        mp = +mp;
        if (heroes[name].mp - mp > 0) {
            heroes[name].mp -= mp;
            console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].mp} MP!`);
        } else {
            console.log(`${name} does not have enough MP to cast ${spell}`);
        }
    };
    function takeDamage(name, damage, attacker) {
        damage = +damage;
        if (heroes[name].hp - damage > 0) {
            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
        } else {
            console.log(`${name} has been killed by ${attacker}`);
        }
    };
    function recharge(name, amount) {
        amount = +amount;
        heroes[name].mp += amount;
        if (heroes[name].mp > 200) {
            heroes[name].mp = 200;
        }
        console.log(`${name} recharged for ${amount} MP!`);
    }
    function heal(name, amount) {
        amount = +amount
        heroes[name].hp += amount;
        if (heroes[name].hp > 100) {
            heroes[name].hp = 100;
        }
        console.log(`${name} healed for ${amount} HP!`);
    };
    let x = Object.entries(heroes);
    for (let kvp of x) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].hp}`);
        console.log(`  MP: ${kvp[1].mp}`);
    }
}
solve([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

