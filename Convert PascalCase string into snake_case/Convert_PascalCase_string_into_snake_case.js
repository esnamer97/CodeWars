function toUnderscore(string) {
    string = String(string);
    let respuesta = "";
    for (let i = 0;i < string.length;i++){
        if(i == 0){
            respuesta = respuesta + string.charAt(i).toLowerCase();
        }else
        if(string.charAt(i) === string.charAt(i).toUpperCase() && isNaN(string.charAt(i)) ){
            respuesta = respuesta + '_' + string.charAt(i).toLowerCase();
        } else {
            respuesta = respuesta + string.charAt(i);
        }
    }
    return respuesta;
  }

console.log(toUnderscore('BrayanElPutoAmo'));

//  returns test_controller
console.log(toUnderscore('TestController'));

// returns movies_and_books
console.log(toUnderscore('MoviesAndBooks'));

// returns app7_test
console.log(toUnderscore('App7Test'));

// returns "1"
console.log(toUnderscore(1));