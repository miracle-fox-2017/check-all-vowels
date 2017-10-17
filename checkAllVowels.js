function checkAllVowel(str){
  let vocal = ['a', 'i', 'u', 'e', 'o'];
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if(str[i] == vocal[j]){
        count++
      }
    }
  }
  
  if (count == str.length){
    return true;
  } else {
    return false;
  }
}

console.log(checkAllVowel('aiueo')); //true
console.log(checkAllVowel('aaiiieuo')); //true
console.log(checkAllVowel('bandung')); //false
console.log(checkAllVowel('miracle')); //false
