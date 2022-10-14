function gramophone(band, album, song) {

    let rotation = 2.5; //rotation every sec

    let songDurationinSec = (album.length * band.length) * (song.length / 2)
    
    let rotations = Math.ceil(songDurationinSec/rotation);
    console.log(`The plate was rotated ${rotations} times.`);


}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');