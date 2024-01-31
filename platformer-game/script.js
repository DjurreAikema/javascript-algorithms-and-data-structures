// const ... = document.getElementById("");
// Get elements from the document
const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

// Canvas
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// Game variables
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;


// Player class
class Player {
  constructor() {
    this.position = {
      x: 10,
      y: 400,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 40;
    this.height = 40;
  }

  draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }

      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }
  }
}


// Platform class
class Platform {
  constructor(x, y) {
    this.position = { x, y };
    this.width = 200;
    this.height = 40;
  }

  draw() {
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}


// Checkpoint class
class CheckPoint {
  constructor(x, y) {
    this.position = { x, y };
  }
}


const player = new Player();

const platformPositions = [
  { x: 500, y: 450 },
  { x: 700, y: 400 },
  { x: 850, y: 350 },
  { x: 900, y: 350 },
  { x: 1050, y: 150 },
  { x: 2500, y: 450 },
  { x: 2900, y: 400 },
  { x: 3150, y: 350 },
  { x: 3900, y: 450 },
  { x: 4200, y: 400 },
  { x: 4400, y: 200 },
  { x: 4700, y: 150 },
];

const platforms = platformPositions.map((platform) => new Platform(platform.x, platform.y));

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  platforms.forEach((platform) => platform.draw());

  if (keys.rightKey.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }

  if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
    platforms.forEach((platform) => {
      platform.position.x -= 5;
    });
  } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
    platforms.forEach((platform) => {
      platform.position.x += 5
    });
  }

  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
    ];

    if (collisionDetectionRules.every((platform) => platform)) {
      player.velocity.y = 0;
      return;
    }

    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height,
    ];

    if (platformDetectionRules.every((platform) => platform)) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    }
  });
};

const keys = {
  rightKey: { pressed: false },
  leftKey: { pressed: false },
};

const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) player.velocity.x = xVelocity;
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) player.velocity.x = xVelocity;
      player.velocity.x += xVelocity;
  }
};

const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";

  animate();
};

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});