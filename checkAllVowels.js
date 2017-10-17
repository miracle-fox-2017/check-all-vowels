function checkAllVowels(word)
{
  if (word.length === 1)
  {
    if (word[0] === 'a' || word[0] === 'i' || word[0] === 'u' || word[0] === 'e' || word[0] === 'o')
    {
      return true;
    }
  }
  if (word[0] === 'a' || word[0] === 'i' || word[0] === 'u' || word[0] === 'e' || word[0] === 'o')
  {
    return checkAllVowels(word.slice(1));
  }
  return false;
}


console.log(checkAllVowels("mlnqyqw"));
console.log(checkAllVowels("toleko"));
console.log(checkAllVowels("aio"));
