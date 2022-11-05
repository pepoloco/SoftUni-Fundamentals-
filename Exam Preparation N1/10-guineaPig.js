function guineaPig(input) {
    //everyday the pig eats 300gr of food , every second day the pet 5% of the rest food , on third day 1/3 of the pig weight
    // calculate if the food,hay,cover will be enought for a month , if it doesn't stop the program
    let quantityFoodInKg = Number(input.shift());
    let quantityHayInKg = Number(input.shift());
    let qunatittyCoverInKg = Number(input.shift());
    let pigWeightInKg = Number(input.shift());

    let quantityFoodInGrams = quantityFoodInKg * 1000;
    let quantityHayInGrams = quantityHayInKg * 1000;
    let quantityCoverInGrams = qunatittyCoverInKg * 1000;
    let pigWeightInGrams = pigWeightInKg * 1000;

    let isFed = false;


    for (let i = 1; i <= 30; i++) {
        quantityFoodInGrams -= 300;
        if (i % 2 === 0) {
            quantityHayInGrams -= quantityFoodInGrams * 0.05;
        }
        if (i % 3 === 0) {
            quantityCoverInGrams -= pigWeightInGrams / 3;
        }
        if (quantityFoodInGrams <= 0 || quantityHayInGrams <= 0 || quantityCoverInGrams <= 0) {
            isFed = false;
            console.log('Merry must go to the pet store!');
            break;
        } else if (quantityFoodInGrams >= 0 || quantityHayInGrams >= 0 || quantityCoverInGrams >= 0) {
            (isFed = true);
        }
    }
    if (isFed) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFoodInGrams / 1000).toFixed(2)}, Hay: ${(quantityHayInGrams / 1000).toFixed(2)}, Cover: ${(quantityCoverInGrams / 1000).toFixed(2)}.`);
    }

}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);