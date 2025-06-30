document.addEventListener('DOMContentLoaded', function() {
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
    guesses.textContent = `Nombre de tentatives : ${attempts}`;

    if (userGuess === randomNumber) {
      lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
      lastResult.style.backgroundColor = 'green';
      lastResult.style.color = 'white';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Faux !';
      lastResult.style.backgroundColor = 'red';
      lastResult.style.color = 'white';
      if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Votre supposition est trop élevée.';
      } else {
        lowOrHi.textContent = 'Votre supposition est trop basse.';
      }
    }
    guessField.value = '';
    guessField.focus();
  }

  guessSubmit.addEventListener('click', checkGuess);

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
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guesses.textContent = '';
    lastResult.textContent = '';
    lastResult.style.backgroundColor = '';
    lowOrHi.textContent = '';
    guessField.value = '';
    guessField.focus();
    resetButton.remove();
  }
});
