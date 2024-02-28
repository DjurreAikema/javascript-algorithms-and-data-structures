const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


checkBtn.addEventListener("click", () => {
  const number = userInput.value;

  if (number === "") {
    alert("Please provide a phone number");
    return;
  }

  if (isNumberValid(number)) {
    resultsDiv.textContent += `Valid US number: ${number}`;
    return;
  } else {
    resultsDiv.textContent += `Invalid US number: ${number}`;
    return;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

const isNumberValid = (number) => {
  const validNumberRegex = /[1]{1}\s?[(]?[0-9]{3}[)]?(\s?|-?)[0-9]{3}(\s?|-?)[0-9]{4}/;
  return validNumberRegex.test(number);
};

const cleanUserInput = (input) => {
  const cleanedInput = input.trim();
  return cleanedInput;
};