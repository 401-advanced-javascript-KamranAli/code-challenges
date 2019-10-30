function merge(firstHalf, secondHalf) {
  const finalArr = [];

  let f = 0;
  let s = 0;
  
  while(f < firstHalf.length && s < secondHalf.length){
    if(firstHalf[f] < secondHalf[s]){
      finalArr.push(firstHalf[f++]);
    } else {
      finalArr.push(secondHalf[s++]);
    }
  }

  return finalArr.concat(firstHalf.slice(f)).concat(secondHalf.slice(s));
}

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

module.exports = { merge, mergeSort };