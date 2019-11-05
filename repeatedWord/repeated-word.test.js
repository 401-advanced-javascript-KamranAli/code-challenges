const repeatedWord = require('./repeated-word');

describe('repeated word challenge', () => {
  it('returns first repeated word in a string', () => {
    const str = 'Once upon a time, there was a brave princess who...';
    const result = repeatedWord(str);
    expect(result).toEqual('a');
  });
});