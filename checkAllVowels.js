function checkVowel(input){
  let vowel = 'aiueo'.split('')
  let lowInput = input.toLowerCase()
  // console.log('----',lowInput)
  let counter = 0

  for(let i=0; i<lowInput.length; i++){
    if(vowel.indexOf(lowInput[i]) !== -1){
      counter+=1
    }
  }
  // console.log(`counter = ${counter} | length inputan ${input.length}`)
  return (counter === lowInput.length ? true : false)
}


console.log(checkVowel('aqrst')); //false
console.log(checkVowel('ukaei')); //false
console.log(checkVowel('ffooo')); //false
console.log(checkVowel('iaeuo')); //true
console.log(checkVowel('EaEAiIOiUe')); //true

// hint: indexOf
