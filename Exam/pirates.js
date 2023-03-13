function pirates(data) {
    let commands = data.shift();
    let cities = {};
    while (commands !== 'Sail') {
        let city = commands.split('||')[0];
        let population = Number(commands.split('||')[1]);
        let gold = Number(commands.split('||')[2]);

        if (cities.hasOwnProperty(city)) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = { population, gold };
        }
        commands = data.shift();
    }
    let action = data.shift();
    while (action !== 'End') {
        let [command, ...arg] = action.split('=>');
        switch (command) {
            case "Prosper":
                prosper(arg[0], arg[1]);
                break;
            case "Plunder":
                plunder(arg[0], arg[1], arg[2]);
                break;
        }

        action = data.shift();
    }


    function plunder(town, people, gold) {
        let curPopulation = +cities[town].population;
        let curGold = +cities[town].gold;
        let newPopulation = +(curPopulation - people);
        let newGold = +(curGold - gold);
        if (newPopulation <= 0 || newGold <= 0) {
            delete cities[town];
            console.log(
                `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );
            console.log(`${town} has been wiped off the map!`);
        } else {
            cities[town].population = newPopulation;
            cities[town].gold = newGold;
            console.log(
                `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );
        }
    };
    function prosper(town, gold) {
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            cities[town].gold += +gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
        }
    };
    let remainingCities = Object.keys(cities);
    if (remainingCities.length > 0) {
        console.log(`Ahoy, Captain! There are ${remainingCities.length} wealthy settlements to go to:`);
        for (const city of remainingCities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        };
    }
    else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
// pirates(["Nassau||95000||1000",
// "San Juan||930000||1250",
// "Campeche||270000||690",
// "Port Royal||320000||1000",
// "Port Royal||100000||2000",
// "Sail",
// "Prosper=>Port Royal=>-200",
// "Plunder=>Nassau=>94000=>750",
// "Plunder=>Nassau=>1000=>150",
// "Plunder=>Campeche=>150000=>690",
// "End"]);
console.log('\n///////////////////\n');
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));