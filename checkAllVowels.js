function checkVowels (str){
  let vowels = 'aiueo';
  let consonant = 'bcdfghjklmnpqrstvwxyz';
  let vow = 0;
  for(let i = 0; i < str.length; i++){

    if(str[i] === vowels[vowels.indexOf(str[i])]){
      // console.log(vowels[vowels.indexOf(str[i])])
      vow = vow + 1;
    }

  }
  if(vow === str.length){
    return true;
  } else {
    return false;
  }
  }

console.log(checkVowels('asdav')) //false
console.log(checkVowels('asraf')) //false
console.log(checkVowels('aaaai')) //true
console.log(checkVowels('uiouiui')) //true
console.log(checkVowels('iuwui')) //false
console.log(checkVowels('alaska')) //false
console.log(checkVowels('iaido')) //false
console.log(checkVowels('eindherjar')) //false
console.log(checkVowels('aaiiuuee')) //true
console.log(checkVowels('yggdrasil')) //false
console.log(checkVowels('uuuuuuuuuuuuuuuuuuueoii')) //true
console.log(checkVowels('elbicnivni')) //false
