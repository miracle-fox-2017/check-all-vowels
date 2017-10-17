function CheckAllVowel(str, callback){

	let tempInput = str.split('')
	const lib = ['a', 'i', 'u', 'e', 'o']
	let vowels = false

	tempInput.forEach((input, index) =>{  

		vowels = false
		var counter = 0
		lib.forEach((libEach) =>{
			if(input === libEach){
				vowels = true
			}
		})
		
		if(!vowels){
			callback(false)	
		}

		if(index== tempInput.length-1){
			callback(true)
		}

	})



	// for(let i=0; i<tempInput.length-1; i++){
	// 	vowels = false
	// 	for(let j=0; j<lib.length-1; j++){
	// 		if(tempInput[i] === lib[j]){
	// 			vowels = true
	// 		}
	// 	}
	// 	if(!vowels){
	// 		return false
	// 	}
	// }
}

//CheckAllVowel('nizar')
let done = false
CheckAllVowel('aiueo', function(result) {
	
	if(!done){
		if(!result){
			done = true	
		}
		console.log(result);
	}
})
