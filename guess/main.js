let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

const guessField = document.getElementById('guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

function checkGuess() {
    const userGuess = Number(guessField.value);
    guessCount++;

    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guessCount} tentatives.`;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = `!!! PERDU !!! Le nombre était ${randomNumber}`;
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Votre supposition est trop basse.';
        } else if (userGuess < randomNumber){
            lowOrHi.textContent = 'Votre supposition est trop élevée.';
        } else {
            lowOrHi.textContent = 'Veuillez entrer un nombre entre 1 et 100.';
        }
    }
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Réinitialiser';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 0;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let para of resetParas) {
        para.textContent = '';
    }

    const resetButton = document.querySelector('button');
    resetButton.remove();

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
