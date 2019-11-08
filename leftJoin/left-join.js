function leftJoin(left, right) {
  const leftPairs = left.arr.reduce((acc, bucket) => {
    if(bucket.length > 0) {
      bucket.forEach(pair => acc.push(pair));
      return acc;
    }
    return acc;
  }, []);

  return leftPairs.reduce((acc, pair) => {
    let rightValue = right.get(pair[0]);
    if(rightValue) pair.push(rightValue);
    else pair.push(null);

    acc.push(pair);

    return acc;
  }, []);
}

module.exports = leftJoin;
