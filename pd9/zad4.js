String.prototype.mirror = function () {
  return this.split("").reverse().join("");
};

const tekst1 = "Ala ma kota";
const tekst2 = "12345";

console.log(`Oryginał: "${tekst1}"`);
console.log(`Odbicie: "${tekst1.mirror()}"`);

console.log(`Oryginał: "${tekst2}"`);
console.log(`Odbicie: "${tekst2.mirror()}"`);
