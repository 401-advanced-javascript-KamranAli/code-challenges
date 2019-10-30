const { merge, mergeSort } = require('./merge-sort');

describe('merge sort', () => {
  it('merge sort strategy for arrays', () => {
    const arr = [4, 3, 9, 8, 1, 5];
    const mergeResult = merge(arr);
    const sortResult = mergeSort(mergeResult);
    expect(sortResult).toEqual();
  });
});