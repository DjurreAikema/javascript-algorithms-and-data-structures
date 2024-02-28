let price = 19.5;
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const cashInput = document.getElementById("cash");
const changeDueDiv = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
  changeDueDiv.innerHTML = "";
  const paymentAmount = cashInput.value;
  amountOfCurrency();

  if (paymentAmount < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (paymentAmount === price) {
    changeDueDiv.innerHTML = "No change due - customer paid with exact cash";
  } else {
    changeDueDiv.innerHTML = "Status: OPEN <br />";
    calculateChange(price, paymentAmount);
  }
});

// Calculate how much change to gice
const calculateChange = (price, payment) => {
  let changeDict = {};
  let difference = payment - price;
  if (difference <= 0) return;

  cid.reverse().forEach((item) => {
    if (item[3] < difference) {
      changeDict[item[0]] = 0;

      while (difference >= item[3] && item[2] > 0) {
        changeDict[item[0]] += item[3];
        difference = difference - item[3];
        item[2] = item[2] - 1;
      }
    }
  });

  console.log(changeDict);
  if (difference === 0) {
    for (const [key, value] of Object.entries(changeDict)) {
      changeDueDiv.innerHTML += `${key} $${value} <br />`;
    }
  } else {
    changeDueDiv.innerHTML = `Status: INSUFFICIENT_FUNDS`;
  }
};

// Calculate how much of each currency is available
const amountOfCurrency = () => {
  cid.forEach((item) => {
    switch (item[0]) {
      case "PENNY":
        item.push(divideAndRound(item[1], 0.01), 0.01);
        break;
      case "NICKEL":
        item.push(divideAndRound(item[1], 0.05), 0.05);
        break;
      case "DIME":
        item.push(divideAndRound(item[1], 0.1), 0.1);
        break;
      case "QUARTER":
        item.push(divideAndRound(item[1], 0.25), 0.25);
        break;
      case "ONE":
        item.push(divideAndRound(item[1], 1), 1);
        break;
      case "FIVE":
        item.push(divideAndRound(item[1], 5), 5);
        break;
      case "TEN":
        item.push(divideAndRound(item[1], 10), 10);
        break;
      case "TWENTY":
        item.push(divideAndRound(item[1], 20), 20);
        break;
      case "ONE HUNDRED":
        item.push(divideAndRound(item[1], 100), 100);
        break;
    }
  });

  console.log(cid);
};

const divideAndRound = (input, divider) => Math.round(input / divider);
