function checkAllVowels(str) {
    let newStr = str.toLowerCase()
    let count = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'a' || newStr[i] === 'i' || newStr[i] === 'u' || newStr[i] === 'e' || newStr[i] === 'o') {
            count++;
        }
    }
    if (count === newStr.length) {
        return true;
    }
    return false;

}

console.log(checkAllVowels('amelia')) //false
console.log(checkAllVowels('Christian')) // false
console.log(checkAllVowels('AAAAOOoeEEEUUU')) //true
console.log(checkAllVowels('Pak Bos')) // false
console.log(checkAllVowels('aIeo')) // true
console.log(checkAllVowels('aooOOOOoeuuu')) // true