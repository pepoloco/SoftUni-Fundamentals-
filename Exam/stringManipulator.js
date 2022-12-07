function stringManipulator(data) {
    let copyData = data.slice(); // arr coppy
    let myString = copyData.shift(); // tursq tova
    let command = copyData.shift(); //comandi
    let replaced = '';

    while (command != 'End') {
        let action = command.split(' ')[0];
        let charOrStartIndex = command.split(' ')[1];
        let replacementOrCount = command.split(' ')[2];

        switch (action) {

            case "Translate":
                replaced = (myString.split(charOrStartIndex).join(replacementOrCount));
                console.log(replaced);
                break;
            case "Includes":
                if (!replaced.includes(charOrStartIndex)) {
                    console.log('False')
                } else {
                    console.log('True');
                }
                break;
            case "Start":
                if (!replaced.startsWith(charOrStartIndex)) {
                    console.log('False');
                } else {
                    console.log('True');
                }
                break;
            case "Lowercase":
                replaced = replaced.toLowerCase();
                console.log(replaced);
                break;
            case "FindIndex":
                console.log(replaced.lastIndexOf(charOrStartIndex));
                break;
            case "Remove":
                if (charOrStartIndex != 0) {
                    replaced = replaced.substring(charOrStartIndex, replacementOrCount) + replaced.slice(replacementOrCount);
                } else {
                    replaced = replaced.slice(replacementOrCount);
                }
                console.log(replaced);
                break;
        }

        command = copyData.shift();
    }

}
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    'End']);
stringManipulator(['*S0ftUni is the B3St Plac3**'
    , "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
