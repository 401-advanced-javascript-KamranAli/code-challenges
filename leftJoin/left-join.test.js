const leftJoin = require('./left-join');
const HashTable = require('../hashTable/hashTable');

describe('Left Join', () => {
  it('join to hash tables', () => {
    const leftHash = new HashTable();
    const rightHash = new HashTable();
    leftHash.add('up', 'upward');
    leftHash.add('down', 'downward');
    leftHash.add('hot', 'blazing');
    leftHash.add('cold', 'icy');
    rightHash.add('up', 'down');
    rightHash.add('down', 'up');
    rightHash.add('hot', 'cold');
    rightHash.add('cold', 'hot');
    const result = leftJoin(leftHash, rightHash);
    expect(result).toEqual([['up', 'upward', 'down'], ['down', 'downward', 'up'], ['hot', 'blazing', 'cold'], ['cold', 'icy', 'hot']]);
  });
});
