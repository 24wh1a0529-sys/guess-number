const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const attempts = document.getElementById("attempts");
const history = document.getElementById("history");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const winPopup = document.getElementById("winPopup");
const winText = document.getElementById("winText");

let secretNumber = generateNumber();
let count = 0;
let previousGuesses = [];

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (guessInput.value === "" || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Enter a number between 1 and 100";
    return;
  }

  count++;
  attempts.textContent = count;

  previousGuesses.push(userGuess);
  history.textContent = previousGuesses.join(", ");

  if (userGuess === secretNumber) {
    message.textContent = "🎉 Correct!";

    winText.textContent = `You guessed it in ${count} attempts!`;

    winPopup.classList.remove("hidden");

    guessBtn.disabled = true;
    guessInput.disabled = true;
  }
  else if (userGuess < secretNumber) {
    message.textContent = "⬇️ Too Low!";
  }
  else {
    message.textContent = "⬆️ Too High!";
  }

  guessInput.value = "";
});

function restartGame() {
  secretNumber = generateNumber();
  count = 0;
  previousGuesses = [];

  attempts.textContent = "0";
  history.textContent = "None";
  message.textContent = "Start Guessing...";

  guessBtn.disabled = false;
  guessInput.disabled = false;

  winPopup.classList.add("hidden");
}

restartBtn.addEventListener("click", restartGame);
window.restartGame = restartGame;