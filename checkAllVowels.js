const allVowels = (vowel) => {
  const vowels = ['a', 'i', 'u', 'e', 'o'];

  for (i of vowel) {
    if (vowels.indexOf(i) === -1) return false;
  }

  return true;
}

console.log(allVowels('aiueo'));
console.log(allVowels('aiueob'));
