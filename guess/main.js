let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Réinitialiser';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  guesses.textContent = '';
  lastResult.textContent = '';
  lastResult.style.backgroundColor = '';
  lowOrHi.textContent = '';
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  if (resetButton) {
    resetButton.parentNode.removeChild(resetButton);
  }
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Précédentes tentatives : ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guessCount} tentatives.`;
    lastResult.style.backgroundColor = 'green';
    lastResult.style.color = 'white';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!! PERDU !!!';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.color = 'white';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Faux !';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.color = 'white';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Votre supposition est trop basse.';
    } else {
      lowOrHi.textContent = 'Votre supposition est trop élevée.';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
guessField.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkGuess();
});