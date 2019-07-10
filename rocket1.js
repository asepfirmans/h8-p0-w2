function pyramidNumberExtension(max) {
  // code here
  var max = 10;
var henti = max /2;
for (var i = max; i >= 1; i--) {
  if (henti >= i) {
    out = ''
    for (j = 1; j <= i; j++) {
      out += i
    }
    console.log(out);
  }
}
    for (var i = 1; i <= max; i++) {//i=0 ,ahir-1
        if (henti >= i) {
            var out = ''
            for (var j = 1; j <= i; j++) {//j=0,j=2,i-1,j-i
                out += i
            }
            console.log(out);
        }
    }
}
pyramidNumberExtension(5)