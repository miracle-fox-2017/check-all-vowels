


function All_Vowels(str){
let vokal = ['a', 'i', 'u', 'e', 'o']


  for(var i = 0; i < vokal.length; i++ ){
    if(vokal.indexOf(str[i]) === -1){
      return false
    }
   }
return true
}
console.log(All_Vowels('aiueo'));
console.log(All_Vowels('paiueo'));
console.log(All_Vowels('baca'));
console.log(All_Vowels('aieo'));
