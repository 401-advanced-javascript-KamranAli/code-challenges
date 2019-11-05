function repeatedWord(str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length; j++) {
      str.split('');
      if(str[i] === str[j]){
        return str[i];
      }
    }
  }


}

module.exports = repeatedWord;