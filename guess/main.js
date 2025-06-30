let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let attempts = 0;
let gameOver = false;

document.addEventListener('DOMContentLoaded', function() {
  const guessField = document.getElementById('guessField');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');

  function resetGame() {
    attempts = 0;
    gameOver = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses.textContent = '';
    lastResult.textContent = '';
    lastResult.style.backgroundColor = '';
    lowOrHi.textContent = '';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    if (document.getElementById('resetButton')) {
      document.getElementById('resetButton').remove();
    }
  }

  function checkGuess() {
    if (gameOver) return;
    const userGuess = Number(guessField.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
      lastResult.textContent = 'Veuillez entrer un nombre entre 1 et 100.';
      lastResult.style.backgroundColor = 'red';
      return;
    }
    attempts++;
    guesses.textContent = `Essais : ${attempts}`;
    if (userGuess === randomNumber) {
      lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      gameOver = true;
      guessField.disabled = true;
      guessSubmit.disabled = true;
      createResetButton();
    } else {
      lastResult.textContent = 'Mauvaise réponse.';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Votre supposition est trop basse.';
      } else {
        lowOrHi.textContent = 'Votre supposition est trop élevée.';
      }
      if (attempts >= 10) {
        lastResult.textContent = `Perdu ! Le nombre était ${randomNumber}.`;
        lowOrHi.textContent = '';
        gameOver = true;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        createResetButton();
      }
    }
    guessField.value = '';
    guessField.focus();
  }

  function createResetButton() {
    if (!document.getElementById('resetButton')) {
      const resetBtn = document.createElement('button');
      resetBtn.textContent = 'Réinitialiser';
      resetBtn.id = 'resetButton';
      resetBtn.onclick = resetGame;
      document.body.appendChild(resetBtn);
    }
  }

  guessSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    checkGuess();
  });

  guessField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkGuess();
  });
});
