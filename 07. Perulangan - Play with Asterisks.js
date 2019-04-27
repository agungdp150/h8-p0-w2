//Menyusun Barisan Bintang

var rows1 = 0;

while (rows1 < 5){
  rows1++ ;
  console.log ('*');
}

//Menyusun Barisan Bintang Dengan Nested Looping

var rows3 = 5;

for (var samping = 1; samping <= rows3; samping++){
  var bintang = '';
  for (var table =1; table <= rows3; table++){
    bintang += "*";
}
console.log (bintang);
}

//Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;

for(var deret = 1; deret <= rows3; deret++){
  
  var star = '';
  for(var kolom = 1; kolom <= deret; kolom++){
    star += "*";
  }
  
  console.log(star);
}