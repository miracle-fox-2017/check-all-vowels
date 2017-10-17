//write your code here
function checkVowel(str) {

  let newStr = str.toLowerCase();
  let vowel = 'aeiou';
  let temp = [];
  for (var x = 0; x < newStr.length; x++) {
    for (var y = 0; y < vowel.length; y++) {
      if (newStr[x] === vowel[y]) {
        temp.push(newStr[x]);
      }
    }
  }

  if (temp.length === newStr.length)
  {
    return true;
  }

  return false;
}

console.log(checkVowel('OOOOO'));
console.log(checkVowel('AIAIAI'));
console.log(checkVowel('bukan'));
