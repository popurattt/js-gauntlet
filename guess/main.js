const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessSubmit.addEventListener('click', () => {
  const userGuess = Number(guessField.value);
  attempts++;

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = `Nice, vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    endGame();
  } else {
    lastResult.textContent = 'Raté !';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = userGuess < randomNumber ? 'Trop bas.' : 'Trop haut.';

    if (attempts >= 10) {
      lastResult.textContent = `Perdu. Le nombre était ${randomNumber}.`;
      endGame();
    }
  }

  guessField.value = '';
});

function endGame() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  const btn = document.createElement('button');
  btn.textContent = 'Réessayer';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses.textContent = '';
    lastResult.textContent = '';
    lastResult.style.backgroundColor = 'white';
    lowOrHi.textContent = '';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    btn.remove();
    guessField.focus();
  });
}
