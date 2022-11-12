function meetings(input) {

    let meeting = [];

    input.forEach(element => {
        let [day, name] = element.split(' ');

        if (meeting[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (let [name, day] of Object.entries(meeting)) {
        console.log(`${name} -> ${day}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);