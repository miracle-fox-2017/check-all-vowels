'use strict'

let checkVowel = (input)=>{
  let vowel = 'aiueo'
  for(let i = 0; i < input.length; i++){
    if(vowel.indexOf(input[i])===-1){
      return false
    }
  }
  return true
}

console.log(checkVowel('aqrstukaeifooo'))
