function solve(input) {
    //until get "Go Shopping!" (while cycle)
    //initial list
    let firstList = input.shift().split('!');

    let type = input.shift();


    while (type != "Go Shopping!") {
        let commandNew = type.split(" ")
        let command = commandNew[0];
        let product = commandNew[1];
        let product2 = commandNew[2];

        switch (command) {
            case "Urgent":
                if (!firstList.includes(product)) {
                    firstList.unshift(product);
                }
                break;

            case "Unnecessary":
                let itemIndx = firstList.indexOf(product);
                if (itemIndx > -1) {
                    firstList.splice(product, 1);
                }
                break;

            case "Correct":
                let itemxIndx2 = firstList.indexOf(product);
                if (itemxIndx2 > -1) {
                    // firstList[itemxIndx2] = product2
                    firstList.splice(itemxIndx2,1,product2);
                }
                break;

            case "Rearrange":
                let remover = firstList.indexOf(product);
                if (remover > -1){
                    let el = firstList[remover];
                    firstList.splice(remover, 1);
                    firstList.push(el);

                }
                break;
        }
        type = input.shift();
    }
    console.log(`${firstList.join(', ')}`)
}
solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);