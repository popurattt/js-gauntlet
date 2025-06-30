let nombre_random = Math.floor(Math.random() * 100) + 1;
let tentatives = 0;
let jeuTermine = false;

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

function resetGame() {
  tentatives = 0;
  jeuTermine = false;
  nombre_random = Math.floor(Math.random() * 100) + 1;
  guesses.textContent = "";
  lastResult.textContent = "";
  lastResult.style.backgroundColor = "";
  lowOrHi.textContent = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  const resetBtn = document.querySelector(".resetBtn");
  if (resetBtn) resetBtn.remove();
}

function checkGuess() {
  if (jeuTermine) return;
  const userGuess = Number(guessField.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    lastResult.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    lastResult.style.backgroundColor = "red";
    return;
  }
  tentatives++;
  guesses.textContent = `Nombre de tentatives : ${tentatives}`;
  if (userGuess === nombre_random) {
    lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${nombre_random} en ${tentatives} tentatives.`;
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    jeuTermine = true;
    guessField.disabled = true;
    guessSubmit.disabled = true;
    creerBoutonReset();
  } else {
    lastResult.textContent = "Mauvaise supposition.";
    lastResult.style.backgroundColor = "red";
    if (userGuess < nombre_random) {
      lowOrHi.textContent = "Votre supposition est trop basse.";
    } else {
      lowOrHi.textContent = "Votre supposition est trop élevée.";
    }
    if (tentatives >= 10) {
      lastResult.textContent = `Perdu ! Le nombre était ${nombre_random}.`;
      lowOrHi.textContent = "";
      jeuTermine = true;
      guessField.disabled = true;
      guessSubmit.disabled = true;
      creerBoutonReset();
    }
  }
  guessField.value = "";
  guessField.focus();
}

function creerBoutonReset() {
  if (!document.querySelector(".resetBtn")) {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Réinitialiser";
    resetBtn.className = "resetBtn";
    resetBtn.style.marginTop = "10px";
    document.querySelector(".form").appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  guessSubmit.addEventListener("click", checkGuess);
  guessField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkGuess();
  });
});
