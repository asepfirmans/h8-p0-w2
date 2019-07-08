//EXERCISE 13

function xo(str){
  var sumX=0
  var sumO=0
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === 'x') {
      sumX = sumX + 1;
    }
    else if (str[i] === 'o') {
      sumO++
    }
  }
  if(sumO===sumX){
    return true
  } 
  else if(sumO!==sumX){
    return false
  }
  //console.log(sumO);
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true