const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const value = numberInput.value;

  if (!value) output.innerText = "Please enter a valid number";
});
