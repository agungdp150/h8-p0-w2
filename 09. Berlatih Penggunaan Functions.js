//Tugas 1

function shoutOut(){
    return 'halo function!';
  }
  
  var tampung = shoutOut();
  console.log (tampung)
  
  
  //Tugas 2
  
  function calculateMultiply(first, second) {
    return first * second
  }
  
  var num1 = 5;
  var num2 = 6;
  
  console.log(calculateMultiply (num1,num2));
  
  //Tugas 3
  
  function processSentence (name, age, address, hobby){
    return 'Nama saya '+ name +' '+ age +' '+ address +' '+ hobby;
  }
  
  var name = 'Agus';
  var age = 30;
  var address = 'Jln. Malioboro, Yogjakarta';
  var hobby = 'gaming';
  
  var fullsentence = processSentence (name, age, address, hobby);
  console.log (fullsentence);