function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let aleatoire = getRandomArbitrary(1, 101); 
let count = 1;

const guess = document.getElementById("guessField");
const guess_submit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

guess_submit.addEventListener("click", () => {
  const usrgues = Number(guess.value);

  if (!usrgues || usrgues < 1 || usrgues > 100) {
    alert("Veuillez entrer un nombre valide entre 1 et 100.");
    guess.value = "";
    guess.focus();
    return;
  }

  if (count === 1) {
    guesses.textContent = "Propositions précédentes : ";
  }

  guesses.textContent += usrgues + " ";

  if (usrgues === aleatoire) {
    lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${aleatoire} en ${count} tentative${count > 1 ? 's' : ''}.`;
    lowOrHi.textContent = "";
    guess.disabled = true;
    guess_submit.disabled = true;
  } else if (count === 10) {
    lastResult.textContent = "PERDU X)";
    lowOrHi.textContent = `Le nombre était ${aleatoire}.`;
    guess.disabled = true;
    guess_submit.disabled = true;
  } else {
    lastResult.textContent = "Faux !";
    if (usrgues < aleatoire) {
      lowOrHi.textContent = "Votre supposition est trop basse.";
    } else {
      lowOrHi.textContent = "Votre supposition est trop élevée.";
    }
  }

  count++;
  guess.value = "";
  guess.focus();
});
