function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

const arraySize = 20;
const maxRandomValue = 100;
let randomArray = [];

for (let i = 0; i < arraySize; i++) {
  randomArray.push(random(maxRandomValue));
}

randomArray.sort((a, b) => a - b);

let sum = 0;
for (let number of randomArray) {
  sum += number;
}

let average = sum / randomArray.length;

console.log("Posortowana tablica:", randomArray);
console.log("Suma:", sum);
console.log("Średnia:", average);
