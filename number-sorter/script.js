const sortButton = document.getElementById("sort");


const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  updateUI(inputValues);
};

sortButton.addEventListener("click", sortInputArray);


const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};


const bubbleSort = (array) => {};