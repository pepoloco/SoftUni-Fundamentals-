function spiceMustFlow(starting) {
    let dayCounter = 0;
    let yield = 0; // total;

    if (starting < 100) {
        console.log(`${dayCounter}`);
        console.log(`${yield}`);
    } else {
        while (starting >= 100) {
            yield += starting
            starting -= 10;
            dayCounter++;
            yield -= 26;
        }
        yield -= 26;
        console.log(`${dayCounter}`);
        console.log(`${yield}`);
    }
}
spiceMustFlow(111);