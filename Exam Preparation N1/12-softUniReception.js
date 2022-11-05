function softUniReception(input) {

    let efficiency = Number(input.shift()); // first employee 
    let efficiency1 = Number(input.shift()); // second employee
    let efficiency2 = Number(input.shift()); // third employee
    let studentsCount = Number(input.shift()); // students count

    let combined = efficiency + efficiency1 + efficiency2; // combined hours per hour that can help
    let hoursCalc = 0; // calc for the hours

    while (studentsCount > 0) { // while stundets are > 0
        studentsCount -= combined; 
        hoursCalc++;
        if (hoursCalc % 4 === 0) {
            hoursCalc++;
        }
    }

    console.log(`Time needed: ${hoursCalc}h.`);
}
softUniReception(['5', '6', '4', '20']);