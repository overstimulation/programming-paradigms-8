const text = {
  check: function (txt, word) {
    return txt.includes(word);
  },

  getCount: function (txt) {
    return txt.length;
  },

  getWordsCount: function (txt) {
    // Usuwamy białe znaki z początku i końca tekstu.
    const trimmedTxt = txt.trim();

    if (trimmedTxt === "") {
      return 0;
    }
    // Dzielimy tekst na słowa używając wyrażenia regularnego, które oznacza jedno lub więcej białych znaków (\s+).
    const words = trimmedTxt.split(/\s+/);

    return words.length;
  },

  setCapitalize: function (txt) {
    const words = txt.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word.length === 0) {
        return "";
      }
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();

      return firstLetter + restOfWord;
    });

    return capitalizedWords.join(" ");
  },

  setMix: function (txt) {
    let result = "";
    let letterCounter = 0;
    const isLetter = (char) => /[a-zA-Z]/.test(char);

    for (let i = 0; i < txt.length; i++) {
      const char = txt[i];

      if (isLetter(char)) {
        if (letterCounter % 2 === 0) {
          result += char.toLowerCase();
        } else {
          result += char.toUpperCase();
        }
        letterCounter++;
      } else {
        result += char;
      }
    }
    return result;
  },

  generateRandom: function (lng) {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < lng; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters[randomIndex];
    }
    return result;
  },
};

const sampleText1 = "ala ma kota";
const sampleText2 = "   Hello, world!   ";
const sampleText3 = "";

console.log(`Tekst 1: "${sampleText1}"`);
console.log(`Tekst 2: "${sampleText2}"`);
console.log(`Tekst 3: "${sampleText3}"`);

console.log(`"ala ma kota" zawiera "kota": ${text.check(sampleText1, "kota")}`);
console.log(`"ala ma kota" zawiera "pies": ${text.check(sampleText1, "pies")}`);

console.log(`Liczba znaków w "${sampleText1}": ${text.getCount(sampleText1)}`);
console.log(`Liczba znaków w "${sampleText2}": ${text.getCount(sampleText2)}`);
console.log(`Liczba znaków w "${sampleText3}": ${text.getCount(sampleText3)}`);

console.log(
  `Liczba słów w "${sampleText1}": ${text.getWordsCount(sampleText1)}`
);
console.log(
  `Liczba słów w "${sampleText2}": ${text.getWordsCount(sampleText2)}`
);
console.log(
  `Liczba słów w "${sampleText3}": ${text.getWordsCount(sampleText3)}`
);
console.log(
  `Liczba słów w "  tylko  spacje  ": ${text.getWordsCount(
    "  tylko  spacje  "
  )}`
);

console.log(
  `Capitalize: "${sampleText1}": "${text.setCapitalize(sampleText1)}"`
);
console.log(
  `Capitalize: "${sampleText2}": "${text.setCapitalize(sampleText2)}"`
);

console.log(`Mix "${sampleText1}": "${text.setMix(sampleText1)}"`);
console.log(`Mix "${sampleText2}": "${text.setMix(sampleText2)}"`);

console.log(`Losowy tekst (długość 10): "${text.generateRandom(10)}"`);
console.log(`Losowy tekst (długość 5): "${text.generateRandom(5)}"`);
