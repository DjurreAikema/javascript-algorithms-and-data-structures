const getMean = (array) => {};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array
    .map((el) => Number(el))
    .filter((el) => !Number.isNaN(el));
};
