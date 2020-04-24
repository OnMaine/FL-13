let word = prompt('What is your word?');
const mod = 2;

if (word !== null && typeof word !=='undefined') {
   word = word.trim();
}
if (!word) {
   alert('Invalid value');
} else {
  if (word.length % mod === 0) {
    alert(word.substring(word.length / mod - 1, word.length / mod + 1));
  } else {
    alert(word.substring(Math.floor(word.length / mod), Math.floor(word.length / mod) + 1));
    }
}
