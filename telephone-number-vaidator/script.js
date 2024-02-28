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
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

const isNumberValid = (number) => {
  return true;
};