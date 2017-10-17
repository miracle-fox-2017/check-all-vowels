function checkVowel(message){
  //if(/[A,I,U,E,O]/gi.test(message) && /[B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/gi.test(message)){
  //if ada aiueo == true dan ada bukan aiueo dalam message == false
  if(/[A,I,U,E,O]/gi.test(message) && /[^A,I,U,E,O]/gi.test(message)){
    return false;
  }
  return true;
}

//driver
console.log(checkVowel("aiueo"));  //true
console.log(checkVowel("a1ueoooooo")); //false
console.log(checkVowel("AlUEO")); //false
console.log(checkVowel("hehehehehehehehe")); //false
