function checkPalindrom(txt) {
  let reversedTxt = txt.split("").reverse().join("");
  return txt === reversedTxt;
}

console.log(checkPalindrom("level"));
console.log(checkPalindrom("Hello"));
console.log(checkPalindrom("program"));
console.log(checkPalindrom(""));
console.log(checkPalindrom("a"));
