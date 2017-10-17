
let checkAllVowels = (str) => {
	let arrStr = str.split('').map( (str) => str.toLowerCase() );
	let wordVowel;

	for (var i = 0; i < arrStr.length; i++) {
		if (isVowel(arrStr[i])) {
			wordVowel = true;
		} else {
			wordVowel = false;
		}
	}

	return wordVowel;
}

let isVowel = (word) => {
	switch (word.toLowerCase()) {
		case 'a':
			return true;
			break;
		case 'i':
			return true;
			break;
		case 'u':
			return true;
			break;
		case 'e':
			return true;
			break;
		case 'o':
			return true;
			break;
		default:
			return false;
			break;
	}
}

console.log(checkAllVowels('AIU'));
console.log(checkAllVowels('EOP'));