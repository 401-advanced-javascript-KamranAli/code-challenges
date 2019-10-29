const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > number; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = number;
  }
  return arr;
};

module.exports = insertionSort;