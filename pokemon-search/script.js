const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const pokemonNameDiv = document.getElementById("pokemon-name");
const pokemonIdDiv = document.getElementById("pokemon-id");
const weightDiv = document.getElementById("weight");
const heightDiv = document.getElementById("height");
const typesDiv = document.getElementById("types");
const hpDiv = document.getElementById("hp");
const attackDiv = document.getElementById("attack");
const defenseDiv = document.getElementById("defense");
const specialAttackDiv = document.getElementById("special-attack");
const specialDefenseDiv = document.getElementById("special-defense");
const speedDiv = document.getElementById("speed");

searchButton.addEventListener("click", () => {
  const searchVal = searchInput.value;

  if (searchVal === "Red") alert("Pokémon not found");
  if (searchVal === "Pikachu") setValues("PIKACHU", 25, 60, 4, 35, 55, 40, 50, 50, 90);
});

const setValues = (name, id, weight, height, types, hp, attack, defence, specialAttack, specialDefence, speed) => {
  setElement(pokemonNameDiv, name);
  setElement(pokemonIdDiv, id);
  setElement(weightDiv, weight);
  setElement(heightDiv, height);
  setElement(typesDiv, types);
  setElement(hpDiv, hp);
  setElement(attackDiv, attack);
  setElement(defenseDiv, defence);
  setElement(specialAttackDiv, specialAttack);
  setElement(specialDefenseDiv, specialDefence);
  setElement(speedDiv, speed);
};

const setElement = (element, value) => {
  if (value) {
    element.textContent = `${value}`;
    element.value = value;
  } else element.textContent = "";
};