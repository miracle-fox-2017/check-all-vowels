function cheackAllVowel(str) {
  hitung = 0;
  var vowel = 'aiueo'
  for(var i = 0; i < str.length; i++){
    for (var j = 0; j < vowel.length; j++){
      if(str[i] === vowel[j]){
        hitung++
      }
    }
  }
  // console.log(hitung, str.length)
  return hitung === str.length
}

console.log(cheackAllVowel('hacktiv8')); // false
console.log(cheackAllVowel('aeiou'));        // true
console.log(cheackAllVowel('hmmmm'));         // false
console.log(cheackAllVowel('aaaiiiieueoeoeoe'));// true
