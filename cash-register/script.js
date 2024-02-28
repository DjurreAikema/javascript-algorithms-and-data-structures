let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashInput = document.getElementById("cash");
const changeDueDiv = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
  const paymentAmount = cashInput.value;

  amountOfCurrency();

  if (paymentAmount < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (paymentAmount === price) {
    changeDueDiv.innerHTML = "No change due - customer paid with exact cash";
  }
});

// Calculate how much change to gice
const calculateChange = (price, payment) => {
  const difference = price - payment;
  if (difference <= 0) return;
};

// Calculate how much of each currency is available
const amountOfCurrency = () => {
  cid.forEach((item) => {
    switch (item[0]) {
      case "PENNY":
        item.push(divideAndRound(item[1], 0.01));
        break;
      case "NICKEL":
        item.push(divideAndRound(item[1], 0.05));
        break;
      case "DIME":
        item.push(divideAndRound(item[1], 0.1));
        break;
      case "QUARTER":
        item.push(divideAndRound(item[1], 0.25));
        break;
      case "ONE":
        item.push(divideAndRound(item[1], 1));
        break;
      case "FIVE":
        item.push(divideAndRound(item[1], 5));
        break;
      case "TEN":
        item.push(divideAndRound(item[1], 10));
        break;
      case "TWENTY":
        item.push(divideAndRound(item[1], 20));
        break;
      case "ONE HUNDRED":
        item.push(divideAndRound(item[1], 100));
        break;
    }
  });

  console.log(cid);
};

const divideAndRound = (input, divider) => Math.round(input / divider);