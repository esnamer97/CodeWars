function solveExpression(exp) {
    let expressions = exp.split('=');
    let left_expression = expressions[0].replace('--','+');
    let right_expression = expressions[1];
    let aux_left;
    let aux_right;

  for(let i = 0; i <= 9; i++){
    if(!left_expression.includes(i.toString()) && !right_expression.includes(i.toString())){
        aux_left = left_expression;
        aux_right = right_expression;
        left_expression = left_expression.replace(/\?/g,i);
        right_expression = right_expression.replace(/\?/g,i);
        if(right_expression !== '00' && eval(left_expression) == eval(right_expression)){
            return i;
        }
        left_expression = aux_left;
        right_expression = aux_right;
    }
  }

  return -1;
}




console.log('El resultado es 1: ', solveExpression('?2?*863=801727'));
/*console.log('El resultado es 2: ', solveExpression('?75268+670973=11?62?1'));
console.log('El resultado es 3: ', solveExpression('?1?154-?10444=5709'));
console.log('El resultado es 4: ', solveExpression('?51*299=254049'));
console.log('El resultado es 5: ', solveExpression('?55955+915319=16?12?4'));
console.log('El resultado es 6: ', solveExpression('???07?+773800=88457?'));
console.log('El resultado es 7: ', solveExpression('?33?00-597291=140400'));
console.log('El resultado es 8: ', solveExpression('?35993-24229=???764'));
console.log('El resultado es 9: ', solveExpression('?6008?+487882=847965'));
console.log('El resultado es 10: ', solveExpression('?13876-297928=1187?8'));
console.log('El resultado es 11: ', solveExpression('?013?2+11?027=919409'));
console.log('El resultado es 12: ', solveExpression('??7845+?50017=13178?2'));
console.log('El resultado es 13: ', solveExpression('?34368-44018=190350'));
console.log('El resultado es 14: ', solveExpression('?69850+1?284=?8?1?0'));
console.log('El resultado es 15: ', solveExpression('?7347?+4?5000=69840?'));
console.log('El resultado es 16: ', solveExpression('?9967?+?57806=497478'));
console.log('El resultado es 17: ', solveExpression('?23920+?8?910=1511830'));
console.log('El resultado es 18: ', solveExpression('?9608+13645=73253'));
console.log('El resultado es 19: ', solveExpression('?37321+??4020=1091408'));
console.log('El resultado es 20: ', solveExpression('?15*586=1?5990'));
console.log('El resultado es 21: ', solveExpression('?50*386=99500'));
console.log('El resultado es 22: ', solveExpression('?41*501=421341'));
console.log('El resultado es 23: ', solveExpression('?67860+299720=767680'));
console.log('El resultado es 24: ', solveExpression('?76727-?26887=?98?0'));
console.log('El resultado es 25: ', solveExpression('?99047+321867=920114'));
console.log('El resultado es 26: ', solveExpression('?54202-339410=414202'));
console.log('El resultado es 27: ', solveExpression('?65184-37773=?27411'));*/