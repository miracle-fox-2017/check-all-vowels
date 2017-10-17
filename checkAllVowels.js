function vowel(str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
      return false
    }
  }
  return true
}

console.log(vowel('uaua'));
