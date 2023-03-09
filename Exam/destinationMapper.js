function destinationMapper(string) {
    let pattern = new RegExp(/([=|\/])(?<country>[A-Z][A-Za-z]{3,})\1/gm);
    let match = pattern.exec(string);
    let travelPoints = 0;
    let countries = [];
    while (match != null) {
        countries.push(match[2])


        match = pattern.exec(string);
    }
    countries.forEach(country => {
        travelPoints += country.length;
    });
    console.log(`Destinations: ${countries.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");