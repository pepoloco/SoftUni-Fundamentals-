function test(input) {
    let rawActivationKey = input.shift();
    let command = input.shift();

    while (command != 'Generate') {
        let arguments = command.split('>>>');
        let indice = arguments.shift();
        switch (indice) {
            case ('Contains'):
                let substring = arguments[0];
                if (rawActivationKey.includes(substring)) {
                    console.log(`${rawActivationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case ('Flip'): {
                let casing = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];
                let part = rawActivationKey.substring(startIndex, endIndex);
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                rawActivationKey = rawActivationKey.replace(part, newPart);
                console.log(rawActivationKey);
                break;
            }
            case ('Slice'):
                let startIndex = arguments[0];
                let endIndex = arguments[1];
                let substRing = rawActivationKey.substring(startIndex, endIndex);
                rawActivationKey = rawActivationKey.replace(substRing, '');
                console.log(rawActivationKey);
                break;
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}
test(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);