function checkAllVowels(str) {
	let vowels = ['a', 'i', 'u', 'e', 'o']
	for (let i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) == -1) {
			return false
		}
	}
	return true
}

console.log(checkAllVowels('aqrst'))
console.log(checkAllVowels('ukaei'))
console.log(checkAllVowels('ffooo'))
console.log(checkAllVowels('aiueo'))
console.log(checkAllVowels('aiueb'))