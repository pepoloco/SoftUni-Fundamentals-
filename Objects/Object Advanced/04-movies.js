function movies(input) {

    let movieArr = [];

    input.forEach(element => {
        if (element.includes('addMovie ')) {
            let name = element.split('addMovie ')[1];
            movieArr.push({ name });
        } else if (element.includes(' directedBy ')) {
            let [name, director] = element.split(' directedBy ');
            let movie = movieArr.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }



        } else if (element.includes(' onDate ')) {
            let [name, date] = element.split(' onDate ');
            let movie = movieArr.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }

        }
    });
    movieArr.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);