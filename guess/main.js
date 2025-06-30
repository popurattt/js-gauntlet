document.addEventListener('DOMContentLoaded', function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessCount = 0;
    let gameWon = false;

    const guessField = document.querySelector('.guessField');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const container = document.querySelector('.max-w-md');

    /**
     * Vérifie la supposition de l'utilisateur et met à jour l'affichage
     * Affiche les messages de victoire, défaite ou d'indication
     */
    function checkGuess() {
        const userGuess = Number(guessField.value);
        guessCount++;
        
        guesses.textContent = `Tentatives précédentes: ${guessCount}`;
        
        if (userGuess === randomNumber) {
            lastResult.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber} en ${guessCount} tentatives.`;
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            gameWon = true;
            setGameOver();
        } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
            lowOrHi.textContent = '';
            setGameOver();
        } else {
            lastResult.textContent = 'Incorrect !';
            lastResult.style.backgroundColor = 'red';
            lowOrHi.textContent = userGuess < randomNumber ? 'Votre supposition est trop basse.' : 'Votre supposition est trop élevée.';
        }
        
        guessField.value = '';
        guessField.focus();
    }

    /**
     * Termine le jeu en désactivant les champs et ajoute le bouton de réinitialisation
     */
    function setGameOver() {
        guessField.disabled = guessSubmit.disabled = true;
        
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Réinitialiser';
        resetButton.className = 'w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer';
        resetButton.addEventListener('click', resetGame);
        container.appendChild(resetButton);
    }

    /**
     * Réinitialise complètement le jeu avec un nouveau nombre aléatoire
     */
    function resetGame() {
        guessCount = gameWon = 0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        
        guesses.textContent = lastResult.textContent = lowOrHi.textContent = '';
        lastResult.style.backgroundColor = '';
        
        guessField.disabled = guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        
        const resetButton = container.querySelector('button');
        if (resetButton) resetButton.remove();
    }

    // Events
    guessSubmit.addEventListener('click', checkGuess);
    guessField.addEventListener('keypress', e => e.key === 'Enter' && checkGuess());
    guessField.focus();
});
