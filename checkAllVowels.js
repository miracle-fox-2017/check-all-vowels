function vowels(huruf){
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let j =0

  for (var i = 0; i < huruf.length; i++) {
    if (vokal.indexOf(huruf[i]) !== -1) {
      j+=1
    }
  }
  if(j === huruf.length){
    return true
  }else{
    return false
  }
}

console.log(vowels('aiueo'));
console.log(vowels('bueo'));
console.log(vowels('auec'));
