function solve(input) {
  let travelstops = input.shift();
  let commands = input.shift();
  while (commands !== 'Travel') {
      let [command, ...rest] = commands.split(':');
     
      switch (command) {
          case 'Add Stop':
              let index = Number(rest[0]);
              let string = rest[1];
              if (index >= 0 && index <= travelstops.length) {
                  travelstops = travelstops.split('');
                  travelstops.splice(index, 0, string);
                  travelstops = travelstops.join('');
              }
              break;
          case 'Remove Stop':
              let startIndex = Number(rest[0]);
              let endIndex = Number(rest[1]);
              if (
                  startIndex >= 0 &&
                  startIndex < travelstops.length &&
                  endIndex >= 0 &&
                  endIndex < travelstops.length &&
                  startIndex <= endIndex
              ) {
                  travelstops = travelstops.split('');
                  travelstops.splice(startIndex, endIndex - startIndex + 1);
                  travelstops = travelstops.join('');
              }
              break;
          case 'Switch':
              let oldString = rest[0];
              let newString = rest[1];
              let offset = 0;
              while (travelstops.indexOf(oldString, offset) >= 0) {
                  travelstops = travelstops.replace(oldString, (oldString, offset) => newString);
                  offset = travelstops.indexOf(oldString, offset) + newString.length;
              }

              break;
          default:
              break;
      }
      console.log(travelstops);
      commands = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${travelstops}`);
}
solve(["Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel"]);
