const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Event listener for Convert Btn
convertBtn.addEventListener("click", () => {
  const value = parseInt(numberInput.value);

  if (!value || isNaN(value)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const convertedValue = convertInput(value);
  output.innerText = convertedValue;
});

// Convert the number into a roman numeral
const convertInput = (value) => {
  let remaining = value;
  let romanNumeralString = "";

  romanNumerals.forEach(([letter, number]) => {
    // Get how many times the letter fits and add it to the string
    const times = howManyTimes(remaining, number);
    if (times > 0) romanNumeralString = addToString(romanNumeralString, letter, times);

    // Set remaining for next loop
    remaining = remainingAfterLetter(remaining, number);
  });

  return romanNumeralString;
};

const howManyTimes = (number, divisor) => Math.floor(number / divisor);

const remainingAfterLetter = (number, divisor) => number % divisor;

const addToString = (string, letter, times) => {
  if (times <= 0) return;

  for (let i = 0; i < times; i++) {
    string += letter;
  }

  return string;
};

// Roman numerals
const romanNumerals = [
  ["M", 1000],
  ["D", 500],
  ["C", 100],
  ["L", 50],
  ["X", 10],
  ["V", 5],
  ["I", 1],
];