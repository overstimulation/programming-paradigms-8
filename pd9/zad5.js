function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();

console.log("Licznik 1:");
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log("\nLicznik 2:");
const counter2 = createCounter();
console.log(counter2());
console.log(counter2());

console.log("\nLicznik 1 ponownie:");
console.log(counter1());
