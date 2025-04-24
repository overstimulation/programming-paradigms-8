function lengthOfLastWord(s) {
  let words = s.trim().split(" ");
  let lastWord = words[words.length - 1];
  return lastWord.length;
}

console.log('"Hello World" ->', lengthOfLastWord("Hello World"));
console.log(
  '"   fly me   to   the moon  " ->',
  lengthOfLastWord("   fly me   to   the moon  ")
);
