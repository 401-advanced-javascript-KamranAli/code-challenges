function merge(firstHalf, secondHalf) {
  const final 
}

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  } else {
    const mid = parseInt(arr.length / 2);
    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid, arr.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

module.exports = { merge, mergeSort };