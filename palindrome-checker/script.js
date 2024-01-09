const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


checkBtn.addEventListener("click", () => {
  const inputString = textInput.value;

  if (inputString === null || inputString === "") {
    alert("Please input a value.");
    return;
  }

  const sanitizedString = sanitizeInput(inputString);
  const flippedString = flipInput(sanitizedString);

  if (compareInput(sanitizedString, flippedString)) {
    result.innerText = `${inputString} is a palindrome`;
  } else {
    result.innerText = `${inputString} is not a palindrome`;
  }
});


function sanitizeInput(inputString) {
  // remove all non-alphanumeric characters (punctuation, spaces and symbols)
  const regex = /[^a-zA-Z\d]/g;
  const sanitizedString = inputString.replace(regex, "");
  // turn everything into the same case (lower or upper case)
  return sanitizedString.toLowerCase();
}

function flipInput(inputString) {
  return inputString.split("").reverse().join("");
}

function compareInput(inputString, filppedString) {
  return inputString === filppedString;
}