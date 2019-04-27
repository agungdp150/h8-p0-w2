//Looping Menggunakan While

//Looping Pertama

var deret = 1;
var jumlah = 0;
while(deret <= 10) {  
  jumlah += 2;
  deret++;
  console.log(jumlah + '- I Love Coding')
}

console.log(jumlah);

//Looping Kedua

var deret = 1;
var jumlah = 22;
while(deret <= 10) {  
  jumlah -= 2;
  deret++;
  console.log(jumlah + '- I will become fullstack developer')
}

console.log(jumlah);

//Looping Menggunakan for

//Looping Pertama

var jumlah = 0;
for(var deret = 1; deret <= 20; deret++) {
  jumlah += 1;
  console.log(jumlah + ' - I love coding');
}

console.log("Jumlah terakhir: " + jumlah);

//Loping Kedua

var jumlah = 21;
for(var deret = 1; deret <= 20; deret++) {
  jumlah -= 1;
  console.log(jumlah + ' - I will become fullstack developer');
}

console.log("Jumlah terakhir: " + jumlah);


//Angka Ganjil dan Genap

for (var i = 1; i <= 100; i++){
  if (i % 2 === 0){
    console.log (i + '-genap')
  } else{
    console.log (i + '-ganjil')
  }
}


//pertambahan counter 2
for (var x = 2 ; x <= 100; x+=2){
  console.log (x)
}

//pertambahan counter 5
for (var x = 5 ; x <= 100; x+=5){
  console.log (x)
}

//pertambahan counter 9
for (var x = 9 ; x <= 100; x+=9){
  console.log (x)
}

//pertambahan counter 2
for (var x = 2 ; x <= 100; x+=2){
  if (x % 3 === 0){
    console.log (x + '-Kelipatan 3')
  }else {
    console.log (x)
  }
}

//pertambahan counter 5
for (var x = 5 ; x <= 100; x+=5){
  if (x % 6 === 0){
    console.log (x + '-Kelipatan 6')
  }else {
    console.log (x)
  }
}

//pertambahan counter 9
for (var x = 9 ; x <= 100; x+=9){
  if (x % 10 === 0){
    console.log (x + '-Kelipatan 10')
  }else {
    console.log (x)
  }
}