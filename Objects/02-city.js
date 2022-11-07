function city(object) {

    for (let element of Object.keys(object)) {
        console.log(`${element} -> ${object[element]}`);
    }

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});