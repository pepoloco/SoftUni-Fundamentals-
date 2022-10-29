function repeatString(string,repeatCount){

    let newString = '';
 
    for (let i = 0; i < repeatCount; i++){
       newString += string;
 
    }
      
    return newString;
 
 }
 console.log(repeatString('abc', 3));
 console.log(repeatString('String', 2));