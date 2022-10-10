function rightPlace(w1, char, w2) {

    let result = w1.replace('_', char);
    let output = result === w2 ? 'Not Matched' : 'Matched';
    console.log(output);

}
rightPlace('Str_ng', 'I', 'Strong');