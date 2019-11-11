const { merge, mergeSort } = require('./merge-sort');

describe('merge sort', () => {
  it('merge sort strategy for arrays', () => {
    const arr1 = [4, 3, 9];
    const arr2 = [8, 1, 5];
    const mergeResult = merge(arr1, arr2);
    const sortResult = mergeSort(mergeResult);
    expect(sortResult).toEqual([1, 3, 4, 5, 8, 9]);
  });
});