function allvowels(str) {
  let vocal =['a','i','u','e','o'] ;
  let ubhstr = str.split('')
  let tamps =  0;
  for (var i = 0; i < vocal.length; i++) {
    for (var j = 0; j < ubhstr.length; j++) {
      if (vocal[i] == ubhstr[j] ) {
        tamps++
      }
    }
  }
  if (tamps === ubhstr.length) {
    console.log(str);
    return true
  }
  console.log(str);
  return false
}
console.log(allvowels('ai')); //true
console.log(allvowels('asss'));//false
