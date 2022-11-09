function inventory(input) {

    let heroStats = [];

    input.forEach(element => {
        let [hero, level, items] = element.split(' / ');
        let character = {
            Hero: hero,
            level: Number(level),
            items: items
        }
        heroStats.push(character);
    });

    heroStats.sort((a, b) => {
        return a.level - b.level;
    });

    heroStats.forEach(element => {
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    })
}
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);