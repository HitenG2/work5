function substr(word, begin, n){
  if (begin > word.length || n > word.length) console.log("Wrong arguments ('begin' or 'n' can't be more, than length of word)");
  else if (begin + n > word.length) console.log("Wrong arguments ('begin' + 'n' more, than length of word)")
  let cuttedWord = '';
  for (let i = begin; i != begin + n; ++i){
    cuttedWord += word[i];
  }
  return cuttedWord;
}

function isPalindrome(word){
  if (word.length <= 1) return true;
  let length = word.length;
  if (word[length - length] == word[length - 1]) return palindrome(substr(word, length - length + 1, length - 2));
  else return false;
}

function apply(n, func, value){
  for (let i = 0; i < n; ++i){
    value = func(value);
  }
  return value;
}