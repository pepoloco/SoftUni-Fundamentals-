function solve(arr) {
    let user = arr.shift();
    let pass = user.split('').reverse('').join('');
    let counter = 0;
    let i = 0;
    let current = arr[i];
    while (i <= arr.length) {
        counter++;
        if (current !== pass) {
            if (counter === 4) {
                return console.log(`User ${user} blocked!`);
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            return console.log(`User ${user} logged in.`)
        }
        current = arr[++i];
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA'])