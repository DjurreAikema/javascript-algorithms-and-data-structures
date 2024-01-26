const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const value = numberInput.value;

  if (!value) output.innerText = "Please enter a valid number";
  if (value < 1) output.innerText = "Please enter a number greater than or equal to 1";
  if (value > 3999) output.innerText = "Please enter a number less than or equal to 3999";
});
