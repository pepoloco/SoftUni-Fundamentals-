function treasureHunt(loot) {

    let index = 0;
    let items = loot[index].split('|');
    index++;
    let command = loot[index];
    let i = 0;

    while (command !== 'Yohoho!') {
        let buffer = command.split(" ");
        let operation = buffer.shift();

        switch (operation) {
            case ('Loot'):
                for (let el of buffer) {
                    if (!items.includes(el)) {
                        items.unshift(el);
                    }
                }
                break;
            case ('Drop'):
                i = Number(buffer[0]);
                let element = items.splice(i, 1)
                items.push(element[0]);
                break;
            case ('Steal'):
                i = Number(buffer[0]);
                if (i < 0 || i > items.length) {
                    continue;
                }
                let stealCount = items.splice(-i);
                console.log(stealCount.join(', '));
                break;
        }
        command = loot[index];
        index++;
    }
    let sum = 0;
    for (let element of items) {
        sum += element.length;
    }
    if (items.length > 0) {
        let avg = sum / items.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
);