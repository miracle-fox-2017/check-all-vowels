'use strict'

function checkVowel(str){
	
	for(var i = 0; i < str.length; i++){
		if(str[i] != 'a' && str[i] != 'i' && str[i] != 'u' && str[i] != 'e' && str[i] != 'o'){
			
			return false
		}
		
	}
	return true
}

console.log(checkVowel('babi'))
