function checkAllVowels(str){
  let vowels=['a','i','u','e','o']
    for (var i = 0; i < str.length; i++) {
      karakter = str[i].toLowerCase().
      if(vowels.indexOf(karakter)===-1){
        return false
      }
    }
    return true
}
console.log(checkAllVowels('uiiuiuius'));
console.log(checkAllVowels('uUhkjdhUnkE'));
console.log(checkAllVowels('ueiuEOiuA'));
console.log(checkAllVowels('uieoauieb'));
