function checkVowel(str) {
  let vow ='aiueo';
  for (var i = 0; i < str.length; i++) {
  if(vow.indexOf (str[i]) === -1){
    return false
    }
  }
  return true
}
console.log(checkVowel('ckklsgdh'));
console.log(checkVowel('apa aja'));
console.log(checkVowel('aaauuu'));
