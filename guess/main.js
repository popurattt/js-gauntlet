let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let gameWon = false;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const resetButton = document.createElement('button');
resetButton.textContent = 'Réinitialiser';
resetButton.addEventListener('click', resetGame);
document.body.appendChild(resetButton);

function checkGuess() {
    const userGuess = Number(guessField.value);
    guessCount++;
    
    if (guessCount === 1) {
        guesses.textContent = 'Suppositions précédentes: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if (userGuess === randomNumber) {
        lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guessCount} tentatives.`;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        gameWon = true;
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Votre supposition est trop basse.';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Votre supposition est trop élevée.';
        }
    }
    
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

function resetGame() {
    guessCount = 0;
    gameWon = false;
    
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    lastResult.style.backgroundColor = '';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);
guessField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

guessField.focus();
