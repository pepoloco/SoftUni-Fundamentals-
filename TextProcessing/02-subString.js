function substring(string, startIndex, count) {
    let substr = string
        .substring(startIndex, startIndex + count);
    
        console.log(substr);
    }
    substring('ASentence', 1, 8);