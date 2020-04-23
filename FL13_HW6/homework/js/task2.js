let word = prompt('What is your word?');

function getMiddle(word) {
  if (word.length % 2 == 0) {
    return word.substring(word.length / 2 - 1, word.length / 2 + 1);
  } else {
    return word.substring(Math.floor(word.length / 2), Math.floor(word.length / 2) + 1)
    }
}
alert(getMiddle(word));
