function wordsTracker(data) {

    let myWords = data.shift().split(' ');
  
    let object = {};
  
    for (let el of myWords) {
      object[el] = 0
    }
  
    for (let el of data) {
      if (object.hasOwnProperty(el)) {
        object[el]++;
      }
    }
  
    for (let word of Object.entries(object).sort((a, b) => {
      return b[1] - a[1];
    })) {
      console.log(`${word[0]} - ${word[1]}`);
    }
  
  }
  wordsTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
  wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);