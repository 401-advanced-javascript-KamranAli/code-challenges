function merge(firstHalf, secondHalf){
  const finalArr = [];

  while (firstHalf.length && secondHalf){
    if(firstHalf[0] <= secondHalf[0]){
      finalArr.push(firstHalf[0]);
      firstHalf = firstHalf.slice(1);
    } else {
      finalArr.push(firstHalf[0]);
      firstHalf = firstHalf.slice(1);
    }
  }
}