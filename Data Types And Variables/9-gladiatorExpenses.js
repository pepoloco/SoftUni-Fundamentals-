function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let sum = 0;
    let shieldC = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            sum += shieldPrice;
            shieldC++;
        }
        if (shieldC  % 2 === 0 && shieldC > 0) {
            sum += armorPrice;
            shieldC = 0;
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);