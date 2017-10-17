function checkVowels(input){
var vow = 'aiueo'
var count = 0
    for(let i = 0; i < input.length; i++){
        for(var j = 0; j < vow.length; j++){
            if(vow[j] == input[i]){
                count++
            }
        }
    }
    if (count < 5){
        return false
    }
    else{
        return true
    }
}

console.log(checkVowels('eiuao'))
console.log(checkVowels('bieou'))
