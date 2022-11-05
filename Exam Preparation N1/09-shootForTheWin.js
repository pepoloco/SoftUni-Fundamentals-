function shootForTheWin(data) {

    let targets = data[0].split(' ').map(Number);
    let targetsShot = 0;
    data.shift();

    for (let elements of data) {
        if (elements == "End") {
            console.log(`Shot targets ${targetsShot} -> ${targets.join(' ')}`);
        }
        if (targets.length > elements) {
            let currentTarget = targets[elements];
            for (let chars in targets) {
                if (targets[chars] != -1) {
                    if (targets[chars] > currentTarget) {
                        targets[chars] -= currentTarget;
                    } else {
                        targets[chars] += currentTarget;
                    }
                }
            }
            targets[elements] = -1;
            targetsShot += 1;
        }
    }
}
shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]));