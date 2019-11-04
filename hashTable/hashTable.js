class HashTable {
  constructor(buckets) {
    this.arr = new Array(buckets).fill([]);
  }

  add(key, value) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    const pair = bucket.find(([savedKey]) => savedKey === key);
    if(pair) {
      return pair[1];
    } else {
      return null;
    }
  }

  contains(key) {
    const boolArr = [];
    this.arr.forEach(bucket => {
      bucket.map(keyVal => {
        boolArr.push(keyVal.includes(key));
      });
    });
    return boolArr.includes(true);
  }

  hash(key){
    return key.split('').reduce((acc, letter, i) => 
      acc += letter.charCodeAt(0) + i, 0)
      % this.arr.length;
  }

}

module.exports = HashTable;