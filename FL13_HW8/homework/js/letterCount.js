function letterCount(str, letter) {
  let totalCount = 0;
  for (let position = 0; position < str.length; position++) {
    let strLowerCase = str.toLowerCase();
    if (strLowerCase.charAt(position) == letter) {
      totalCount += 1;
    }
  }
  return totalCount;
}

console.log(letterCount("Maggy", "g"));
console.log(letterCount("Barry", "b"));
console.log(letterCount("", "z"));
