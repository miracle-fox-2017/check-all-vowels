function checkVowel(message){
  //if(/[A,I,U,E,O]/gi.test(message) && /[B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/gi.test(message)){
  //if ada aiueo == true dan ada bukan aiueo dalam message == false

  //regex
  // if(/[A,I,U,E,O]/gi.test(message) && /[^A,I,U,E,O]/gi.test(message)){
  //   return false;
  // }
  // return true;

  //tanpa regex
  //pecah string
  var pecah = message.split("");
  var vowel = ['a','i','u','e','o'];
  var hasil = 0;

  //loop kata
  for(var i = 0; i<pecah.length; i++){
    //loop vowel
    for(var j = 0; j<vowel.length; j++){
      if(pecah[i] == vowel[j]){
        hasil += 1;
      }
    }
    //if hasil == 0 (ga ada salah satu dari vowel) return false
    if(hasil==0){
      return false;
    }
    
    //reset hasil untuk huruf selanjutnya
    hasil = 0;
  }

  return true;

}

//driver
console.log(checkVowel("aiueo"));  //true
console.log(checkVowel("a1ueoooooo")); //false
console.log(checkVowel("AlUEO")); //false
console.log(checkVowel("hehehehehehehehe")); //false
console.log(checkVowel("aueaeueaueueueaueuae")); //true
