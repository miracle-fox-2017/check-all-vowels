
function checkall (str){
  let vowel = 'aiueo'
let counter =0;
for (let i = 0; i<str.length;i++){
  for (let j = 0; j<vowel.length;j++){
    if (vowel[j] === str[i]){
      counter++
    }
  }

}
if (counter === str.length){
  return true
}
else {
  return false
}
}
console.log(checkall('aiuewoau'));
