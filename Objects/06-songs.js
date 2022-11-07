function songs(input) {

    let n = Number(input[0]);
    let typeList = input.pop();

    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];

    for (let i = 1; i <= n; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Songs(type, name, time);
        songsArr.push(song);
    }
    if (typeList === 'all') {
        songsArr.forEach((i) => {
            console.log(i.name);
        });
    } else {
        let filted = songsArr.filter((i) => i.type === typeList);
        filted.forEach((i) => console.log(i.name));
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);