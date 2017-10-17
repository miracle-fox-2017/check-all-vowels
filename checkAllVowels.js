function checkvowels(str){
  var strSplit = str.split('');
  var hasil=[];
  // console.log(strSplit);
  for(var i=0;i<strSplit.length;i++){
    if(strSplit[i]==='a'|| strSplit[i]==='i'||strSplit[i]==='u'||strSplit[i]==='e'||strSplit[i]=='o'){
      hasil.push(strSplit[i]);
      // console.log(hasil);
      if(hasil.length===strSplit.length){
        return true;
      }
    }
  }
  return false;
}



console.log(checkvowels('aaaiiiiiii'))
console.log(checkvowels('aaaaanuuuuuu'))
