let checkVowel = str =>{
	const vowel = ["a","i","u","e","o"];
	while (str.length !== 0){
		if (vowel.indexOf(str[0]) === -1){
			return false;
		}
		str = str.slice(1);
	}
	return true;
}

console.log(checkVowel("aiueo"));