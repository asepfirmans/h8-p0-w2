/*1. Melakukan Looping Menggunakan While */
console.log("LOOPING PERTAMA");
var angka =2
while(angka<=20){
    console.log(angka +" - I love coding");
    angka +=2
}

/*------------- */
console.log("LOOPING KEDUA");
var angka =20;
while(angka>=2){
    console.log(angka + " - I will become fullstack developer");
    angka -=2
}
/*LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer */
/*1. Melakukan Looping Menggunakan While */
console.log("LOOPING PERTAMA");
for (var angka=1; angka<=20; angka++){
    console.log(angka +" - I love coding");
    }
console.log("LOOPING KEDUA"); 
for (var angka=20; angka>0; angka--) {
    console.log(angka +" - I will become fullstack developer");
    }  
/* LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer*/
/*3. Angka Ganjil dan Genap*/
for (var angka = 1; angka <= 100; angka++) {
    console.log("counter sekarang = " + angka);
    if (angka % 2 == 0) {
        console.log("GENAP")
    }
    else { console.log("Ganjil") };
}
/*Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9. */
console.log("LOOPING  DENGAN pERTAMBAHAN COUNTER 2");
for (var angka = 1; angka <= 100; angka += 2) {
    console.log("counter sekarang = " + angka);
    if (angka % 3 == 0) {
        console.log(angka + ' ' + 'Kelipatan 3');
    }
    else {
        console.log('" "');
    };
}
/*----------------------------------------------------------- */
console.log("LOOPING  DENGAN pERTAMBAHAN COUNTER 5");
for (var angka = 1; angka <= 100; angka += 5) {
    console.log("counter sekarang = " + angka);
    if (angka % 6 == 0) {
        console.log(angka + ' ' + 'Kelipatan 6');
    }
    else {
        console.log('" "');
    };
}
/*----------------------------------------------------------- */
console.log("LOOPING  DENGAN pERTAMBAHAN COUNTER 9");
for (var angka = 1; angka <= 100; angka += 9) {
    console.log("counter sekarang = " + angka);
    if (angka % 10 == 0) {
        console.log(angka + ' ' + 'Kelipatan 10');
    }
    else {
        console.log('" "');
    };
}
/*----------------------------------------------------------- */
/*//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)*/