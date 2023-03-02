function solve(str) {
    let total = 0;
    let res = [];
    const reg = new RegExp(/([|#])(?<product>[aZA-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g);
    let match = reg.exec(str)
    while (match != null) {
        let name = match[2];
        let date = match[3];
        let calories = +(match[4]);

        total += calories;
        res.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)
        match = reg.exec(str)
    }
    let days = Math.floor(total / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (let line of res) {
        console.log(line);
    }
}
// solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

/*•	First, print the number of days you will be able to last with the food you have:
"You have food to last you for: {days} days!"
•	The output for each food item should look like this:
"Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
*/