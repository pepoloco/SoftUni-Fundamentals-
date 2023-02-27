//check if target plunder reached
function solve(arr) {
    let count = 1;
    let days = arr.shift(); //days in sea
    let dailyPlunder = +arr.shift(); //daily
    const expectedPlunder = arr.shift(); //expected
    let gathering = 0;

    while (days !== 0) {
        gathering += dailyPlunder;
        if (count % 3 === 0) {
            gathering += (dailyPlunder * 0.50);
        } if (count % 5 === 0) {
            gathering -= gathering * 0.30;
        }
        count++;
        days--;
    }
    let percentage = (gathering / expectedPlunder) * 100;
    if (gathering >= expectedPlunder) {
        console.log(`Ahoy! ${gathering} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
solve((["5",
    "40",
    "100"]));
solve((["10",
    "20",
    "380"]));

/*Calculate how much plunder the pirates manage to gather. Each day they gather the plunder. 
Keep in mind that they attack more ships every third day and add additional plunder to their total gain, which is 50% of the daily plunder.
 Every fifth day the pirates encounter a warship, and after the battle, they lose 30% of their total plunder.
If the gained plunder is more or equal to the target, print the following:
"Ahoy! {totalPlunder} plunder gained."
If the gained plunder is less than the target.Calculate the percentage left and print the following:
"Collected only {percentage}% of the plunder."
Both numbers should be formatted to the 2nd decimal place.
*/
