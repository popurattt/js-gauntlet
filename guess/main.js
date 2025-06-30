let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guessCount} tentatives.`;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = `Faux ! Le nombre était ${randomNumber}.`;
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Votre supposition est trop basse.';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Votre supposition est trop élevée.';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resultParas = document.querySelectorAll('.resultParas p');
    for (const para of resultParas) {
        para.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
