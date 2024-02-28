const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const numbersArr = [
  "1 555-555-5555",
  "1 (555) 555-5555",
  "5555555555",
  "555-555-5555",
  "(555)555-5555",
  "1(555)555-5555",
  "555-5555",
  "5555555",
  "1 555)555-5555",
  "1 555 555 5555",
  "1 456 789 4444",
  "123**&!!asdf#",
];

checkBtn.addEventListener("click", () => {
  const number = userInput.value;

  if (number === "") {
    alert("Please provide a phone number");

    numbersArr.forEach((num) => {
      if (isNumberValid(num)) {
        resultsDiv.innerHTML += `Valid US number: ${num} <br />`;
      } else {
        resultsDiv.innerHTML += `Invalid US number: ${num}  <br />`;
      }
    });

    return;
  }

  if (isNumberValid(number)) {
    resultsDiv.innerHTML += `Valid US number: ${number} <br />`;
    return;
  } else {
    resultsDiv.innerHTML += `Invalid US number: ${number}  <br />`;
    return;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

const isNumberValid = (number) => {
  const validNumberRegex = /([1]{1})?\s?([0-9]{3}|[(][0-9]{3}[)])(\s?|-?)[0-9]{3}(\s?|-?)[0-9]{4}/;
  return validNumberRegex.test(number);
};

const cleanUserInput = (input) => {
  const cleanedInput = input.trim();
  return cleanedInput;
};