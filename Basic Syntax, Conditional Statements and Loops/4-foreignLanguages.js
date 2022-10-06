function foreignLanguages(country){

    switch(country){
        case('USA'): 
        case('English'):
        console.log('English');
        break;
        case('Spain'):
        case('Argentina'):
        case('Mexico'):
        console.log('Spanish');
        break;
        case('Germany'): 
        console.log('unknown');
        break;
    }

}
foreignLanguages('Germany');  

