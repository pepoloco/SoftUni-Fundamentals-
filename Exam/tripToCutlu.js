function solve(input) {
  let line = input.shift();
  while (line !== "Last note") {
    let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
    let result = line.match(pattern);
    if (result) {
      let landCode = Number(result[2]);
      let geohashCode = result[3];
      if (landCode === geohashCode.length) {
        let nameOfThePeak = result[1].replace(/[!@#$?]+/g, "");
        console.log(`Coordinates found! ${nameOfThePeak} -> ${geohashCode}`);
      } else {
        console.log("Nothing found!");
      }
    } else {
      console.log("Nothing found!");
    }
    line = input.shift();
  }
}
solve([
  "!@Ma?na?sl!u@=7<<tv58ycb4845",
  "E!ve?rest=.6<<tuvz26",
  "!K@2.,##$=4<<tvnd",
  "!Shiha@pan@gma##9<<tgfgegu67",
  "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
  "Last note",
]);
//

function solve1(input) {
  let pattern =
    /^(?<peak>[A-Za-z0-9$@!#?]+)=(?<geodash_length>[\d]+)<<(?<geodash_code>(.+))$/gm;
  let commands = input.shift();
  while (commands !== "Last note") {
    let result = commands.matchAll(pattern);
    let found = false;
    for (let el of result) {
      let { peak, geodash_length, geodash_code } = el.groups;
      if (Number(geodash_length) === geodash_code.length) {
        found = true;
        peak = peak.replace(/[!@$#?]+/g, "");
        console.log(`Coordinates found! ${peak} -> ${geodash_code}`);
      }
    }
    if (!found) {
      console.log("Nothing found!");
    }
    commands = input.shift();
  }
}

solve1([
  "!@Ma?na?sl!u@=7<<tv58ycb4845",
  "E!ve?rest=.6<<tuvz26",
  "!K@2.,##$=4<<tvnd",
  "!Shiha@pan@gma##9<<tgfgegu67",
  "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
  "Last note",
]);
