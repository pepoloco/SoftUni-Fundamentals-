function solve(data) {
    //days the pirating lasts (5)
    //plunder for a day (40)
    //last receive the expected plunder (100)
    //calculate how much plunder the pirates manage to gather // each day they gather the plunder
    //attack every third day > gain 50% of the daily plunder which is (40)
    //every fifth day fight a warship > lose 30% of total plunder

    const days = Number(data.shift());
    let dailyPlunder = Number(data.shift());
    const expectedPlunder = Number(data.shift());
    let totalPlunder = 0;


    for (let i = 1; i <= days ; i++) {
        totalPlunder += dailyPlunder;

        if (i === 3) {
            totalPlunder = (50 / 100) * dailyPlunder + dailyPlunder;
    
        } if (i === 5) {
            totalPlunder = Math.abs(totalPlunder * (30 / 100) - totalPlunder);
        } 
    }
    let percentage = totalPlunder / expectedPlunder * 100;
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
solve((["5", "40", "100"]));
solve((["10", "20", "380"]));