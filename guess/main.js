let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    guesses.textContent = `Nombre de tentatives : ${attempts}`;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
        if (userGuess < randomNumber) {
            lowOrHi.style.backgroundColor = 'red';
            lowOrHi.textContent = 'Votre supposition est trop basse.';
        } else {
            lowOrHi.style.backgroundColor = 'red';
            lowOrHi.textContent = 'Votre supposition est trop élevée.';
        }
    }
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Réinitialiser';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    guesses.textContent = '';
    lastResult.textContent = '';
    lastResult.style.backgroundColor = 'white';
    lowOrHi.textContent = '';

    const resetButton = document.querySelector('button');
    resetButton.remove();
}

guessSubmit.addEventListener('click', checkGuess);
