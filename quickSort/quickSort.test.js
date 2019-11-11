const quicksort = require('./quickSort');

describe('Quick Sort', () => {

  it('should properly quick sort an array', () => {
    const arr = [4, 3, 5, 1, 6, 9];
    const left = 0;
    const right = arr.length - 1;
    quicksort(arr, left, right);
    expect(arr).toEqual([1, 3, 4, 5, 6, 9]);
  });

});