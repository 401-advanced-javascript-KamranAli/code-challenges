const HashTable = require('./hashTable');

describe('Hash Table', () => {

  it('Creates a hash table', () => {
    const hashTab = new HashTable();
    expect(hashTab.hash('kam')).toBe(0);
  });

  it('adds a key value pair', () => {
    const hashTab = new HashTable();
    hashTab.add('kam', 'megan');
    expect(hashTab.get('kam')).toBe('megan');
  });

  it('check if a hash exists', () => {
    const hashTab = new HashTable();
    hashTab.add('kam', 'anna');
    expect(hashTab.contains('kam')).toBe(true);
    expect(hashTab.contains('jared')).toBe(false);
  });

  it('returns null for a key that doesnt exist', () => {
    const hashTab = new HashTable();
    hashTab.add('kam', 'anna');
    expect(hashTab.get('marty')).toEqual(null);
  });

  it('returns null for a key that doesnt exist, and returns an existing key', () => {
    const hashTab = new HashTable();
    hashTab.add('kam', 'anna');
    expect(hashTab.get('marty')).toEqual(null);
    expect(hashTab.get('kam')).toEqual('anna');
  });

  it('gets a key', () => {
    const hashTab = new HashTable();
    hashTab.add('kam', 'megan');
    hashTab.add('megan', 'jared');
    hashTab.add('jared', 'kam');
    expect(hashTab.get('kam')).toEqual('megan');
    expect(hashTab.get('megan')).toEqual('jared');
    expect(hashTab.get('jared')).toEqual('kam');
  });

});