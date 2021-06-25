Math.round = function(number) {
    let aux = 0;
    for(let i = 0; i <= number;i++){
        aux = i;
    }
    return number-aux >= 0.5 ? aux+1 : aux; // TODO: fix this
  };
  
  Math.ceil = function(number) {
      let aux = 0;
    for(let i = 0; i <= number;i++){
        aux = i;
    }
    return number-aux == 0 ? aux : aux+1;
  };
  
  Math.floor = function(number) {
      let aux = 0;
    for(let i = 0; i <= number;i++){
        aux = i;
    }
    return aux;
  };

  console.log(Math.round(0.5));
  console.log(Math.ceil(0.6));
  console.log(Math.floor(0.5));