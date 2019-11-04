function numSwitch(items, leftNum, rightNum) {
  const temp = items[leftNum];
  items[leftNum] = items[rightNum];
  items[rightNum] = temp;
}

function part(items, left, right) {
  let piv = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while(i <= j) {
    while(items[i] < piv) {
      i++;
    }
    while(items[j] > piv) {
      j--;
    }
    if(i <= j){
      numSwitch(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right){
  let index;
  if(items.length > 1) {
    index = part(items, left, right);
    if(left < index - 1){
      quickSort(items, left, index - 1);
    }
    if(index < right){
      quickSort(items, index, right);
    }
  }
  return items;
}

module.exports = quickSort;