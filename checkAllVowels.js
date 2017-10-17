function vowels(huruf) {
  var hasil = [];
  var str = huruf.split('')

    for(var i = 0 ; i < str.length ; i++) {
      if(str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'u' || str[i] === 'o') {
        hasil.push(str[i]);
      }
    }
    if(hasil.length === str.length) {
      return true;
    }
    return false;
}

console.log(vowels('aiueo')) // true
console.log(vowels('aiuro')) // false
console.log(vowels('aiusasdeo')) // false
console.log(vowels('aeo')) // true
console.log(vowels('aiu')) // true
console.log(vowels('fabodifojsd')) // false
