let word = prompt('What is your word?');
const divisionBy = 2;
const isEven = word.length % divisionBy === 0;
const middleCharIndex = word.length / divisionBy;
const evenResult = word.substring(middleCharIndex - 1, middleCharIndex + 1);
const oddResult = word.substring(Math.floor(middleCharIndex), Math.floor(middleCharIndex) + 1);

if (word) {
  word = word.trim();
}
if (!word) {
  alert('Invalid value');
} else {
  if (isEven) {
    alert(evenResult);
  } else {
    alert(oddResult);
  }
}
