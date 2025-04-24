function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbers = [];
const count = 10;
let greaterThanTenCount = 0;

for (let i = 0; i < count; i++) {
  let randomNumber = generateRandom(1, 20);
  numbers.push(randomNumber);
  if (randomNumber > 10) {
    greaterThanTenCount++;
  }
}

console.log("Wygenerowane liczby:", numbers);
if (greaterThanTenCount >= count / 2) {
  console.log("udało się");
} else {
  console.log("niestety nie");
}
