const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    input = Math.floor(input / 2);
    binary = (input % 2) + binary;
  }

  result.innerText = binary;
};

const a = () => {
  return "freeCodeCamp " + b();
};