function counterStrike(input) {

    let energy = Number(input.shift());
    let distance = input.shift();
    let gamesWon = 0;


    while (distance != "End of battle") {

        let numDistance = Number(distance);
        if (energy >= numDistance) {
            gamesWon++;
            energy -= numDistance;
        } else {
            console.log(`Not enough energy! Game ends with ${gamesWon} won battles and ${energy} energy`);
            energy -= numDistance;
            break;
        }

        if (gamesWon % 3 === 0) {
            energy += gamesWon;
        }

        distance = input.shift();
    }
    if (energy >= 0) {
        console.log(`Won battles: ${gamesWon}. Energy left: ${energy}`);
    }
}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));