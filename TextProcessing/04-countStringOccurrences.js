function solve(text, wordSearch) {

    let wordCounter = 0;
    for (let word of text.split(' ')){
        if (word === wordSearch){
            wordCounter++;
        }
    }
    console.log(wordCounter);
}
solve('This is a word and it also is a sentence', 'is');