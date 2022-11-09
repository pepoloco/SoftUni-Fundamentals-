function dictionary(input) { //array of strings in JSON form

     let dict = {}; // create an object

     for (let element of input) { // for of cycle trough the array

          let obj = JSON.parse(element); // parse the JSON strings to object

          dict = Object.assign(dict, obj); // assignt the inputs to the object       

     }



     let sortedKeys = Object.keys(dict);

     sortedKeys.sort((a, b) => a.localeCompare(b));



     for (let term of sortedKeys) {

          let definition = dict[term];

          console.log(`Term: ${term} => Definition: ${definition}`);

     }

} dictionary([
     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);