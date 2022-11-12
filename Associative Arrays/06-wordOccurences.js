function wordOccurences(data) {

    let map = new Map();
    for (let el of data) {
        if (!map.has(el)) {
            map.set(el, 0);
        }
        map.set(el, map.get(el) + 1);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, words] of sorted) {
        console.log(`${word} - ${words} times`);
    }

}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);