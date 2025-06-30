let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const guessField = document.getElementById('guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const formDiv = document.querySelector('.form');

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
    guessField.focus();

    const oldReset = document.getElementById('resetBtn');
    if (oldReset) oldReset.remove();
}

function checkGuess() {
    if (gameOver) return;
    const userGuess = Number(guessField.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        lastResult.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = '';
        return;
    }
    attempts++;
    guesses.textContent = `Nombre d'essais : ${attempts}`;
    if (userGuess === randomNumber) {
        lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = '';
        gameOver = true;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        showResetButton();
    } else {
        lastResult.textContent = "Mauvaise supposition.";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Votre supposition est trop basse.";
        } else {
            lowOrHi.textContent = "Votre supposition est trop élevée.";
        }
    }
    guessField.value = '';
    guessField.focus();
}

function showResetButton() {
    let resetBtn = document.createElement('button');
    resetBtn.textContent = "Réinitialiser";
    resetBtn.id = "resetBtn";
    resetBtn.onclick = resetGame;
    formDiv.appendChild(resetBtn);
}

guessSubmit.addEventListener('click', checkGuess);
guessField.addEventListener('keydown', function(e) {
    if (e.key === "Enter") checkGuess();
});