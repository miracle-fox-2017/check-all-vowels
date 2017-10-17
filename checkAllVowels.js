function checkVow (str){
  let vowel = 'aiueo'.split('')
  let counter = 0
  for(el in vowel){
    for(element in str){
      if(str[element] ===vowel[el]){
        counter++
      }
    }
  }
  return (counter == str.length) ? true:false
}

console.log(checkVow('xxxxmmam'));
console.log(checkVow('aiooo'));
