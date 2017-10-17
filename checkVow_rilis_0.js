function checkVow (str){
  let vowel = 'aiueo'.split('')
  let counter = 0
  for(el in vowel){
    if(str.indexOf(vowel[el])!== -1){
      counter++
    }
  }
  return (counter>0) ? true:false
}

console.log(checkVow('xxxxmmm'));
console.log(checkVow('ami'));
