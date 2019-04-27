var nama = 'Batman';
var peran = 'Thabib';

if (peran === ''){
  console.log (nama + ',nama harus di isi!!');
} else if (peran === 'Batman'){
  console.log ('Hello ' + nama + ', Pilih peranmu untuk memulai game');
} else if (peran === ''){
  console.log ('Selamat datang di dunia Proxytia, ' + nama);
  console.log ('Halo ' + nama +' '+ peran + (', Kamu dapat menggunakan magic untuk heal'));
} else if(peran === 'Thabib'){
  console.log ('Selamat datang di dunia Proxytia,' + nama);
  console.log ('Hello ' + peran + ' ' + nama + ',Ciptakan keajaiban untuk membuat tim mu menang');
}

console.log ('Fair Play in Proxytia')