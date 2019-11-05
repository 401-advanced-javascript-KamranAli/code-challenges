function repeatedWord(str) {
  const newStr = str.split(' ');
  for(let i = 0; i < newStr.length; i++) {
    for(let j = 0; j < newStr.length; j++) {
      if(newStr[i] === newStr[j]) {
        return newStr;
      }
    }
  }


}

module.exports = repeatedWord;