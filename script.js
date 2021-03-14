function PropertyError(property) {
  Error.call(this, property);
  this.name="PropertyError";
  this.message="Ошибка в свойстве " + property;
  if (Error.captureStackTrace){
    Error.captureStackTrace(this, PropertyError);
  }
  else {
    this.stack = (new Error()).stack;
  }
}

function substr(word, begin, n){
  //if (begin > word.length || n > word.length) console.log("Wrong arguments ('begin' or 'n' can't be more, than length of word)");
  //else if (begin + n > word.length) console.log("Wrong arguments ('begin' + 'n' more, than length of word)");
  word = String(word);
  if (!word) throw new PropertyError("word");
  if (!begin && begin != 0) throw new PropertyError("begin");
  if (!n) throw new PropertyError("n");
  if (begin > word.length) throw new PropertyError("begin ('begin' can't be more, than length of word)");
  if (n > word.length) throw new PropertyError("n ('n' can't be more, than length of word)");
  if (begin + n > word.length) throw new PropertyError("'begin' and 'n' ('begin' + 'n' more, than length of word)");
  try{
    let cuttedWord = '';
    for (let i = begin; i != begin + n; ++i){
      cuttedWord += word[i];
    }
    return cuttedWord;
  }
  catch(err){
    console.error(err);
  }

}

function isPalindrome(word){
  word = String(word);
  if (word.length <= 1) return true;
  let length = word.length;
  if (word[length - length] == word[length - 1]) return isPalindrome(substr(word, length - length + 1, length - 2));
  else return false;
}

function apply(n, func, value){
  for (let i = 0; i < n; ++i){
    value = func(value);
  }
  return value;
}