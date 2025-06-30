let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const guessField = document.querySelector("#guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const guessesPara = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  guessesPara.textContent = "";
  lastResult.textContent = "";
  lastResult.style.backgroundColor = "transparent";
  lowOrHi.textContent = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  guesses++;

  if (guesses === 1) {
    guessesPara.textContent = "Tentatives précédentes : ";
  }
  guessesPara.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guesses} tentatives.`;
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    guessField.disabled = true;
    guessSubmit.disabled = true;
    addResetButton();
  } else if (userGuess > randomNumber) {
    lastResult.textContent = "Votre supposition est trop élevée.";
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
  } else if (userGuess < randomNumber) {
    lastResult.textContent = "Votre supposition est trop basse.";
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
  }

  guessField.value = "";
  guessField.focus();
}

function addResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Réinitialiser";
  resetBtn.addEventListener("click", () => {
    resetBtn.remove();
    resetGame();
  });
  document.body.appendChild(resetBtn);
}

guessSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  checkGuess();
});

resetGame();
