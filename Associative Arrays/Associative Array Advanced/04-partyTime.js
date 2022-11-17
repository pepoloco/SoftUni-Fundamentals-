function partyTime(input) {

    //two types , VIP / REGULAR 
    //till receive PARTY
    //VIP START WITH DIGIT 
    //


    let list = {};
    let remainingList = {};
    let guest = input.shift();

    while (guest != 'PARTY') {
        if (isNaN(guest[0])) {
            list[guest] = 'guest';
        } else {
            list[guest] = 'vip';
        }
        guest = input.shift();
    }
    for (const remainging of input) {
        remainingList[remainging] = 'remainging';
    }

    for (const key of Object.keys(list)) {
        for (const key1 of Object.keys(remainingList)) {
            if (key === key1) {
                delete list[key]
            }
        }
    }
    let notANum = Object.keys(list).filter(word => isNaN(word[0]));
    let sorted = Object.keys(list).sort((a, notANum) => {
        return a - notANum;
    })
    console.log(Object.entries(list).length);
    console.log(`${sorted.join('\n')}`);



}