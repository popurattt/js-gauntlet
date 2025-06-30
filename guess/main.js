// Tout le code JS s’exécute après le chargement complet du DOM
document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessCount = 1;
  let resetButton;

  let guessField = document.getElementById("guessField");
  let guessSubmit = document.querySelector(".guessSubmit");
  let guesses = document.querySelector(".guesses");
  let lastResult = document.querySelector(".lastResult");
  let lowOrHi = document.querySelector(".lowOrHi");

  guessSubmit.addEventListener("click", checkGuess);

  function checkGuess(e) {
    e.preventDefault(); // Empêche la soumission du formulaire

    let userGuess = Number(guessField.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      alert("Veuillez entrer un nombre entre 1 et 100.");
      guessField.value = "";
      guessField.focus();
      return;
    }

    if (guessCount === 1) {
      guesses.textContent = "Propositions précédentes : ";
    }

    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
      lastResult.textContent =
        "Félicitations ! Vous avez deviné le nombre " +
        randomNumber +
        " en " +
        guessCount +
        " tentative(s).";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!! PERDU !!! Le nombre était " + randomNumber;
      lastResult.style.backgroundColor = "red";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Faux !";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Votre supposition est trop basse.";
      } else {
        lowOrHi.textContent = "Votre supposition est trop élevée.";
      }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Réinitialiser";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
});
