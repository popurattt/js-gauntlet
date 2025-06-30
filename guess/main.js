let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  attempts++;

  if (attempts === 1) {
    guesses.textContent = 'Tentatives précédentes : ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (attempts >= 10) {
    lastResult.textContent = `Fin du jeu. Le nombre était ${randomNumber}.`;
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Faux !';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = userGuess < randomNumber
      ? 'Votre supposition est trop basse.'
      : 'Votre supposition est trop élevée.';
  }

  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Réinitialiser';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  attempts = 0;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guesses.textContent = '';
  lastResult.textContent = '';
  lastResult.style.backgroundColor = '';
  lowOrHi.textContent = '';
  guessField.value = '';
  guessField.focus();
  resetButton.remove();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);
