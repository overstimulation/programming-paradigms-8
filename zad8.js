function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    let char = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      let currentStr = strs[j];

      if (i >= currentStr.length || currentStr[i] !== char) {
        return firstStr.substring(0, i);
      }
    }
  }

  return firstStr;
}

console.log('Wejście: ["flower","flow","flight"]');
console.log("Wyjście: ", longestCommonPrefix(["flower", "flow", "flight"]));

console.log('Wejście: ["dog","racecar","car"]');
console.log("Wyjście: ", longestCommonPrefix(["dog", "racecar", "car"]));

console.log('Wejście: ["interspecies", "interstellar", "interstate"]');
console.log(
  "Wyjście: ",
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
);

console.log('Wejście: ["a"]');
console.log("Wyjście: ", longestCommonPrefix(["a"]));

console.log('Wejście: ["", "b"]');
console.log("Wyjście: ", longestCommonPrefix(["", "b"]));

console.log('Wejście: ["cir", "car"]');
console.log("Wyjście: ", longestCommonPrefix(["cir", "car"]));
