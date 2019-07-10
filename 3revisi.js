var max; // silahkan beri nilai bebas
var max = 5
max>=1 ;if (max<1){console.log('undefined');
}
// code here
for (var i = 1; i <= max; i++) {
    var out = ''
    for (var j = 1; j <= i; j++) {
        out += i
    }
    console.log(out);
}
