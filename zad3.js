function printNumbers(nr) {
  let result = "";
  for (let i = 1; i <= nr; i++) {
    result += i;
    if (i < nr) {
      result += " ";
    }
  }
  return result;
}

console.log(printNumbers(10));
console.log(printNumbers(1));
console.log(printNumbers(0));
console.log(printNumbers(-5));
