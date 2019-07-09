/*
  ///////
  setrika
  ///////

  Kalian akan membuat aplikasi setrika yang mana akan memilah pakaian yang bisa di setrika
  ataupun tidak, kemudian apabila pakaian memiliki panjang 20 cm lebih maka pakaian
  akan dilipat.
  
  [INSTRUCTIONS]
    1. Jika tidak ada jenisPakaian, maka tampilkan "Tentukkan pakaian yang ingin Anda setrika".
       Jika ada jenisPakaian lanjut ke step 2.
    2. Jika pakaianPerluDisetrika bernilai salah, maka tampilkan
       "Silahkan pilih pakaian yang ingin disetrika". Jika pakaianPerluDisetrika bernilai benar,
       maka lanjut ke step 3.
    3. Jika jenisPakaian bernilai "baju" atau "celana" dan panjang lebih dari 20, maka tampilkan
       "Pakaian sudah disetrika dan dilipat, Terima Kasih". Jika tidak tampilkan "Pakaian sudah
       disetrika, Terima Kasih".

  [RULES]
    1. Dilarang menggunakan built in function apapun.
*/

var jenisPakaian=['baju', 'celana', 'rok']; // silahkan beri nilai bebas
var pakaianPerluDisetrika=[0,1]; // silahkan beri nilai bebas
var panjangPakaian=['sama atau lebih dari 20 cm', 'kurang dari 20 cm']; // silahkan beri nilai bebas
pakaianPerluDisetrika=1
jenisPakaian='celana'
//panjangPakaian='sama atau lebih dari 20 cm'
panjangPakaian= 'kurang dari 20 cm'


if (jenisPakaian ==['']){
   console.log('Tentukkan pakaian yang ingin Anda setrika');
   }
  if (pakaianPerluDisetrika==0){
      console.log("Silahkan pilih pakaian yang ingin disetrika");
   }
else if (pakaianPerluDisetrika == 1) {
   if (jenisPakaian == 'baju' || jenisPakaian == 'celana' || jenisPakaian == 'rok') {

      if (panjangPakaian == 'sama atau lebih dari 20 cm') {
         console.log("Pakaian sudah disetrika dan dilipat, Terima Kasih");
      }
      else { console.log("Pakaian sudah disetrika, Terima Kasih") }
   }
}
 
         
           
            
         
         



 