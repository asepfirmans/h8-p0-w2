//HARI JUMAT
//EXERCISE 10
/*Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
 *  Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
 * Jika kedua angka bernilai sama, function akan me-return -1.
*/
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
      return true
  }
  else if(angka1 > angka2){
      return false
  }
  else{ 
      return "-1"
  }
}
// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
 
 //EXERCISE 11
 function balikKata(kata) {
  var out = '';
  for (var i = kata.length - 1; i >= 0; i--) {
    out += kata[i]
  }
  // you can only write your code here!
  return out
}
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

//EXERCISE 12

function konversiMenit(menit) {
  var minute = Math.floor(menit / 60);
  var second = menit%60
  if(second < 10) {
    return (minute+':'+'0' + second)
  }
  else { 
    return (minute +':'+second)
  }
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
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