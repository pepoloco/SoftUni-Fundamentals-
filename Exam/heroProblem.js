function heroProblem(input) {

    let copyArr = input.slice();
    let command = copyArr.shift();
    let heroCollection = {};
    while (command != 'End') {
        let action = command.split(' ');
        let buffer = action[0];
        let heroName = action[1];
        let spellName = action[2];

        switch (buffer) {
            case "Enroll":
                if (!heroCollection.hasOwnProperty(heroName)) {
                    heroCollection[heroName] = heroName;
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;
            case "Learn":
                if (!heroCollection.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                }
                let exist = Object.values(heroCollection).includes(spellName);
                if (!exist) {
                    heroCollection[heroName] = [spellName];
                } else {
                    console.log(`${heroName} has already learnt ${spellName}`)
                }
                break;
            case "Unlearn":
                if (!heroCollection.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                } else {

                }
                break;

        }
        command = copyArr.shift();
    }
}
heroProblem(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"]);
