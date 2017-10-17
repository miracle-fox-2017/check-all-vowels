function checkVowels(param){
    let hasil=0;
    let vokal="aiueo";
    for(var i=0;i < param.length;i++){
        for(var j=0;j < vokal.length;j++){
            if(param[i] === vokal[j]){
                hasil++;
            }
        }
    }
    return hasil === param.length;
}

console.log(checkVowels("aiueo"));  // True
console.log(checkVowels("baiueo")); // False
