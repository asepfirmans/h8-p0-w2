var nama='nina';
var peran= '';
//peran ='Ksatria'
//peran='Tabib'
peran ="Penyihir";
if(nama==' '&& peran===''){
    console.log("Nama harus diisi!")
    }
else if (nama!==''&& peran===""){
    console.log("Halo " +nama +','+"Pilih peranmu untuk memulai game!");
}
else {
    console.log("Selamat datang di Dunia Proxytia, " + nama);//ga masalah nama siapapun
    if (peran === 'Ksatria') {
        console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === 'Tabib') {
        console.log("Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.");
    }
    else if (peran === 'Penyihir') {
        console.log("Halo " + peran + " " + nama + "," + "ciptakan keajaiban yang membantu kemenanganmu!");
    }
}

/*// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"*/