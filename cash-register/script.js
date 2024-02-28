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

  if (paymentAmount < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (paymentAmount === price) {
    changeDueDiv.innerHTML = "No change due - customer paid with exact cash";
  }
});