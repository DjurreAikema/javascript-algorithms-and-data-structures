let xp = 0;
let health = 100;
let gold = 50;

let inventory = ['stick'];
let currentWeapon = 0;
let fighting;

let monsterHealth;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const monsterHealthText = document.querySelector("#monsterHealth");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    },
];

const locations = [
    {
        name: "town square",
        text: "You are in the town square. You see a sign that says \"Store\".",
        "button text" : [
            "Go to store",
            "Go to cave",
            "Fight dragon"
        ],
        "button functions" : [
            goStore,
            goCave,
            fightDragon
        ]
    },
    {
        name: "store",
        text: "You enter the store.",
        "button text" : [
            "Buy 10 health (10 gold)",
            "Buy weapon (30 gold)",
            "Go to town square"
        ],
        "button functions" : [
            buyHealth,
            buyWeapon,
            goTown
        ]
    },
    {
        name: "cave",
        text: "You enter the cave. You see some monsters.",
        "button text" : [
            "Fight slime",
            "Fight fanged beast",
            "Go to town square"
        ],
        "button functions" : [
            fightSlime,
            fightBeast,
            goTown
        ]
    }
];

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Functions
function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        goldText.innerText = gold;

        health += 10;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            goldText.innerText = gold;

            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a "+ newWeapon +".";

            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";

        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function update(location) {
    text.innerText = location.text;

    button1.innerText = location["button text"][0];
    button1.onclick = location["button functions"][0];

    button2.innerText = location["button text"][1];
    button2.onclick = location["button functions"][1];

    button3.innerText = location["button text"][2];
    button3.onclick = location["button functions"][2];
}

function fightSlime() {

}

function fightBeast() {

}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;

        let currentWeapon = inventory.shift();
    }
}