function theatrePromotions(day, age) {

    let currentTieOfTheWeek = day;
    let ages = Number(age);

    switch (currentTieOfTheWeek) {
        case ('Weekday'):
            if (0 <= ages && ages <= 18) {
                console.log('12$');
            } else if (18 < ages && ages <= 64) {
                console.log('18$');
            } else if (64 < ages && ages <= 122) {
                console.log('12$');
            } else {
                console.log('Error!');
            }
            break;
        case ('Weekend'):
            if (0 <= ages && ages <= 18) {
                console.log('15$');
            } else if (18 < ages && ages <= 64) {
                console.log('20$');
            } else if (64 < ages && ages <= 122) {
                console.log('15$');
            } else {
                console.log('Error!');
            }
            break;
        case ('Holiday'):
            if (0 <= ages && ages <= 18) {
                console.log('5$');
            } else if (18 < ages && ages <= 64) {
                console.log('12$');
            } else if (64 < ages && ages <= 122) {
                console.log('10$');
            } else {
                console.log('Error!');
            }
            break;
    }

}
theatrePromotions('Holiday', 15);