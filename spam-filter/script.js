const result = document.getElementById("result");
const messageInput = document.getElementById("message-input");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help/;

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

  messageInput.value = "";
});

const isSpam = (msg) => false;
