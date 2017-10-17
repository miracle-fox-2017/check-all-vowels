let cekTrue = (set) => {
  let setArr = ['a', 'i', 'u', 'e', 'o'];
  let jumlah = 0;
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < setArr.length; j++) {
      if (set[i] === setArr[j]) {
        jumlah++;
      }
    }
  }
  return (jumlah === set.length ? true : false);
}

console.log(cekTrue('aaaaaaaa'));
console.log(cekTrue('aaaabcaaa'));