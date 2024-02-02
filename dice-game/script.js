const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const currentRoundText = document.getElementById("current-round");
const currentRoundRollsText = document.getElementById("current-round-rolls");
const totalScoreText = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let totalScore = 0;
let round = 1;


// Toggle rules
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide Rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show Rules";
    rulesContainer.style.display = "none";
  }
});


// Roll dice algorithm
const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  }

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
  }
});


// Update stats
const updateStats = () => {
  currentRoundRollsText.textContent = rolls;
  currentRoundText.textContent = round;
};


// Detect combinations
const updateRadioOption = (optionNode, score) => {
  scoreInputs[optionNode].disabled = false;
  scoreInputs[optionNode].value = score;
  scoreSpans[optionNode].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (arr) => {
  const counts = {};

  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let highestCount = 0;

  for (let num of arr) {
    const count = counts[num];

    // Three of a kind
    if (count >= 3 && count > highestCount) highestCount = count;
    // Four of a kind
    if (count >= 4 && count > highestCount) highestCount = count;
  }

  const sumOfAllDice = diceValuesArr.reduce((a, b) => a + b, 0);

  if (highestCount >= 4) updateRadioOption(1, sumOfAllDice);
  if (highestCount >= 3) updateRadioOption(0, sumOfAllDice);
  updateRadioOption(5, 0);
};