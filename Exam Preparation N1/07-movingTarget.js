function movingTarget(data) {

    //While loop till "End";
    //Shoot the target at index if it exist reducing the value by the power;
    //Add a target with the value ad the index if it exist;
    //Strike , remove a target at the given index and the one before and next to it on the radius , if invalid print Strike Missed.

    let sequenceOfTargets = data.shift().split(' ').map(Number);
    let order = data.shift();

    while (order != "End") {
        let curOrder = order.split(' ');
        let command = curOrder.shift();
        let index = Number(curOrder.shift());
        let power = Number(curOrder.shift());

        switch (command) {
            case "Shoot":
                if (sequenceOfTargets[index]){
                    sequenceOfTargets[index] -= power;
                }
                if (sequenceOfTargets[index] <= 0) {
                    sequenceOfTargets.splice(index, 1);
                }
                break;
            case "Add":
                if (sequenceOfTargets[index]) {
                    sequenceOfTargets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case ("Strike"):
                if (!sequenceOfTargets[index - power] && sequenceOfTargets[index + power]) {
                    console.log('Strike missed!');
                } else {
                    sequenceOfTargets.splice(index - power, power * 2 + 1);
                }
                break;
        }

        order = data.shift();
    }
    console.log(`${sequenceOfTargets.join('|')}`);

}
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
);